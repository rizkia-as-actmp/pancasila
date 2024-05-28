"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
    const [playerName, setPlayerName] = useState("")

    useEffect(() => {
        const existingPlayerName = localStorage.getItem("PLAYER_NAME")
        if (existingPlayerName) {
            setPlayerName(existingPlayerName)
        }
    }, [])

    const playerNameInputOnChangeEventHandler = (event) => {
        if (playerName.length > 10) {
            setPlayerName(event.target.value.slice(0,35))
        } else {
            setPlayerName(event.target.value)
        }
    }


    const playerNameInputOnBlurEventHandler = () => {
        localStorage.setItem("PLAYER_NAME",playerName)
    }

    return (
        <div
            style={{
                background: "url('/images/pancas.jpeg') 100% / cover no-repeat",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "257px 0 233px 0",
                boxSizing: "border-box",
                height: "100vh",
            }}
        >
            <div
                style={{
                    backdropFilter: "blur(2px)",
                    display: "inline-block",
                    overflowWrap: "break-word",
                    fontFamily: "'Odibee Sans'",
                    fontWeight: 300,
                    fontSize: "180px",
                    color: "#FFE500",
                    WebkitTextStroke: "2px black",
                    marginTop: "7%",
                }}
            >
                BrainSpark Pancasila
            </div>
            <div
                style={{
                    position: "relative",
                    marginRight: "26px",
                    display: "flex",
                    flexDirection: "row",
                    width: "fit-content",
                    boxSizing: "border-box",
                    paddingTop: "10%",
                }}
            >
                <Link
                    href="/play"
                    style={{
                        backgroundColor: "pink",
                        border: "5px solid red",
                        borderRadius: "10px",
                        textDecoration: "none",
                        position: "relative",
                        marginRight: "40px",
                        display: "flex",
                        padding: "19px 0.2px 20px 0",
                        width: "267px",
                        boxSizing: "border-box",
                    }}
                >
                    <span
                        style={{
                            overflowWrap: "break-word",
                            fontFamily: "'Inter'",
                            fontWeight: 900,
                            fontSize: "32px",
                            color: "#000000",
                            paddingLeft: "33%",
                        }}
                    >
                        PLAY
                    </span>
                </Link>
                <Link
                    href="/leaderboard"
                    style={{
                        backgroundColor: "pink",
                        border: "5px solid red",
                        borderRadius: "10px",
                        textDecoration: "none",
                        position: "relative",
                        display: "flex",
                        padding: "23px 16.2px 19px 22px",
                        boxSizing: "border-box",
                    }}
                >
                    <span
                        style={{
                            overflowWrap: "break-word",
                            fontFamily: "'Inter'",
                            fontWeight: 900,
                            fontSize: "30px",
                            color: "#000000",
                        }}
                    >
                        LEADERBOARD
                    </span>
                </Link>
            </div>
            <textarea
                style={{
                    marginTop: "60px",
                    textAlign : "center",
                    overflowWrap: "break-word",
                    fontFamily: "'Inter'",
                    fontWeight: 900,
                    fontSize: "30px",
                    color: "#000000",
                    resize: "none",
                    overflow: "auto",
                }}
                value={playerName}
                onChange={playerNameInputOnChangeEventHandler}
                onBlur={playerNameInputOnBlurEventHandler}
            />
        </div>
    );
}
