import prisma, { prismaErrorCode } from "@/lib/prisma";
import { FailError } from "@/utils/custom-error";
import { errorResponse, failResponse, successResponse } from "@/utils/response";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import Joi from "joi";
import { NextResponse } from "next/server";

export async function GET() {
  let leaderboards;
  try {
    leaderboards = await prisma.leaderboard.findMany({
      orderBy: {
        score: "desc",
      },
    });
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === "P2025") {
        return NextResponse.json(
          ...failResponse(`${e.meta.modelName} not found`, 404),
        );
      }
      return NextResponse.json(
        ...failResponse(prismaErrorCode[e.code], 409, e.meta.modelName),
      );
    }

    if (e instanceof FailError) {
      return NextResponse.json(...failResponse(e.message, e.code, e.detail));
    }

    return NextResponse.json(...errorResponse());
  }

  return NextResponse.json(...successResponse({ leaderboards: leaderboards }));
}

export async function POST(request) {
  let leaderboards;
  let newLbIndex;
  let newLb;
  try {
    const schema = Joi.object({
      user_name: Joi.string()
        .pattern(/^[A-Za-z\s']+$/)
        .min(3)
        .required(),
      score: Joi.number().min(0).integer().required(),
    });

    let req = await request.json();

    req = schema.validate(req);
    if (req.error) {
      throw new FailError("Invalid request format.", 403, req.error.details);
    }
    req = req.value;

    await prisma.$transaction(async (tx) => {
      newLb = await tx.leaderboard.create({
        data: {
          user_name: req.user_name,
          score: req.score,
        },
        select: {
          leaderboard_id: true,
          score: true,
        },
      });

      leaderboards = await tx.leaderboard.findMany({
        orderBy: {
          score: "desc",
        },
      });

      newLbIndex = leaderboards.findIndex((lb) => {
        if (lb.leaderboard_id === newLb.leaderboard_id) {
          return true;
        }
      });

      const eliminatedIds = leaderboards
        .slice(process.env.LEADERBOARDS_MAX_RANK)
        .reduce((acc, board) => {
          acc.push(board.leaderboard_id);
          return acc;
        }, []);

      await tx.leaderboard.deleteMany({
        where: {
          leaderboard_id: { in: eliminatedIds },
        },
      });
    });
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === "P2025") {
        return NextResponse.json(
          ...failResponse(`${e.meta.modelName} not found`, 404),
        );
      }
      return NextResponse.json(
        ...failResponse(prismaErrorCode[e.code], 409, e.meta.modelName),
      );
    }

    if (e instanceof FailError) {
      return NextResponse.json(...failResponse(e.message, e.code, e.detail));
    }

    return NextResponse.json(...errorResponse());
  }

  return NextResponse.json(
    ...successResponse({
      is_new_record: newLbIndex < process.env.LEADERBOARDS_MAX_RANK,
      rank:
        newLbIndex < process.env.LEADERBOARDS_MAX_RANK
          ? newLbIndex + 1
          : "not a new record",
      score: newLb.score,
    }),
  );
}
