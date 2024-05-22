import { NextResponse } from "next/server";
import { failResponse } from "./utils/response";

export const authPayloadAccountId = "authorization_payload_account_id";

export async function middleware(request) {
    const jsonRoutes = [];

    if (!checkRoute(jsonRoutes, request) && request.method !== "GET") {
        try {
            await request.json();
        } catch (e) {
            if (e instanceof SyntaxError) {
                return NextResponse.json(
                    ...failResponse("Request/JSON syntax error", 400, {
                        name: e.name,
                        message: e.message,
                    }),
                );
            }
        }
    }
}

export const config = {
    matcher: ["/api/:path*"],
};

function checkRoute(routes, request) {
    return routes.some((route) => {
        if (request.nextUrl.pathname.startsWith(route[0])) {
            if (route[1]) {
                return route[1].some((method) => method === request.method);
            }
            return true;
        }
        return false;
    });
}
