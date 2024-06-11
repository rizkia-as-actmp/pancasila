"use client";
import { useEffect, useState } from "react";
import ScoreScreen from "./score";

export default function ScorePage() {
    const [record, setRecord] = useState({
        is_new_record: false,
        rank: 0,
        score: 0,
    });

    useEffect(() => {
        async function postScore() {
            const cs = sessionStorage.getItem("totalScore");
            const existingPlayerName = localStorage.getItem("PLAYER_NAME");

            const record = await fetch(`/api/leaderboards`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_name: existingPlayerName,
                    score: cs,
                }),
                next: { revalidate: 0 },
            }).then((r) => r.json());

            setRecord(record.data);
        }

        postScore();
    }, []);

    return (
        <>
            <ScoreScreen record={record} />
        </>
    );
}
