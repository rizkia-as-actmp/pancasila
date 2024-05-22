"use client";

import Link from "next/link";

export default function LeaderboardScreen({ leaderboards }) {
  return (
    <body
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        style={{
          width: "50%",
          margin: "0 auto",
          textAlign: "center",
          border: "2px solid #891515",
          borderRadius: "10px",
          padding: "20px",
          backgroundColor: "#fec896",
        }}
      >
                <h1>Leaderboard</h1>
        <table
          style={{
            borderCollapse: "collapse",
            width: "90%",
            margin: "20px auto",
            border: "5px solid #fff9f9",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            whiteSpace: "nowrap",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "center",
                  padding: "10px",
                  border: "1px solid #ac5b5b",
                  verticalAlign: "middle",
                  backgroundColor: "#a59977",
                  color: "#fff",
                  textTransform: "uppercase",
                  fontSize: "18px",
                  borderBottom: "10px solid #fec896",
                  paddingBottom: "15px",
                }}
              >
                Peringkat
              </th>
              <th
                style={{
                  textAlign: "center",
                  padding: "10px",
                  border: "1px solid #ac5b5b",
                  verticalAlign: "middle",
                  backgroundColor: "#a59977",
                  color: "#fff",
                  textTransform: "uppercase",
                  fontSize: "18px",
                  borderBottom: "10px solid #fec896",
                  paddingBottom: "15px",
                }}
              >
                Nama
              </th>
              <th
                style={{
                  textAlign: "center",
                  padding: "10px",
                  border: "1px solid #ac5b5b",
                  verticalAlign: "middle",
                  backgroundColor: "#a59977",
                  color: "#fff",
                  textTransform: "uppercase",
                  fontSize: "18px",
                  borderBottom: "10px solid #fec896",
                  paddingBottom: "15px",
                }}
              >
                Nilai
              </th>
            </tr>
          </thead>
          <tbody>
            {leaderboards.map((item, index) => (
              <tr key={index} className={`row${index + 1}`}>
                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    border: "1px solid #ac5b5b",
                    verticalAlign: "middle",
                  }}
                >
                  <strong>{index + 1}</strong>
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    border: "1px solid #ac5b5b",
                    verticalAlign: "middle",
                  }}
                >
                  <strong>{item.user_name}</strong>
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    border: "1px solid #ac5b5b",
                    verticalAlign: "middle",
                  }}
                >
                  <strong>{item.score}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          style={{
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          <Link
            href="/"leader
            style={{
              backgroundColor: "#d64833",
              color: "white",
              padding: "10px 20px",
              textDecoration: "none",
              display: "inline-block",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease, transform 0.3s ease",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              marginLeft: "10px",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#3e8e41";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#d64833";
              e.target.style.transform = "scale(1)";
            }}
          >
            Kembali
          </Link>
        </div>
      </div>
    </body>
  );
}
