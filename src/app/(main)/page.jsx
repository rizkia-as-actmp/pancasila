"use client";

import Link from "next/link";

export default function HomePage() {
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
    </div>
  );
}
