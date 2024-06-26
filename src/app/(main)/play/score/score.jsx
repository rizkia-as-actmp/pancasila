"use client";

import Link from "next/link";

export default function ScoreScreen({ record }) {
    return (
        <body
            style={{
                margin: 0,
                padding: 0,
                boxSizing: "border-box",
                backgroundImage: "url('/images/reward.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                color: "#ffffff",
                fontFamily: "Arial, sans-serif",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <h1 style={{ fontSize: "60px", color: "black" }}>Permainan Berakhir</h1>
            {record.is_new_record ? (
                <div
                    style={{
                        textAlign: "center",
                    }}
                >
                    <h1
                        style={{ fontSize: "60px", color: "black", marginBottom: "-30px" }}
                    >
                        Rekor baru
                    </h1>
                    <h1 style={{ fontSize: "60px", color: "black" }}>
                        Peringkat : {record.rank}
                    </h1>
                </div>
            ) : (
                <p></p>
            )}
            <h1 style={{ fontSize: "60px", color: "black" }}>{record.score}</h1>
            <div
                className="container"
                style={{ textAlign: "center", marginTop: "220px" }}
            >
                <Link
                    href="/play"
                    className="btn"
                    style={{
                        textDecoration: "none",
                        margin: "50px",
                        padding: "15px 30px",
                        fontSize: "25px",
                        color: "#000000",
                        backgroundColor: "#d64833",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition: "background-color 0.3s, transform 0.3s",
                        display: "inline-block",
                    }}
                >
                    Mulai Lagi
                </Link>
                <Link
                    href="/play/statistic"
                    className="btn"
                    style={{
                        textDecoration: "none",
                        margin: "50px",
                        padding: "15px 30px",
                        fontSize: "25px",
                        color: "#000000",
                        backgroundColor: "#d64833",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition: "background-color 0.3s, transform 0.3s",
                        display: "inline-block",
                    }}
                >
                    Liat Hasil
                </Link>
                <Link
                    href="/"
                    className="btn"
                    style={{
                        textDecoration: "none",
                        margin: "50px",
                        padding: "15px 30px",
                        fontSize: "25px",
                        color: "#000000",
                        backgroundColor: "#d64833",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition: "background-color 0.3s, transform 0.3s",
                        display: "inline-block",
                    }}
                >
                    Kembali
                </Link>
            </div>
        </body>
    );
}
