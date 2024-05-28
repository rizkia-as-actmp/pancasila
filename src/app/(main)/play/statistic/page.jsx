"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StatisticPage() {
  const [stat, setStat] = useState(0);

  useEffect(() => {
    async function getStat() {
      const statistic = JSON.parse(sessionStorage.getItem("statistic"));
      setStat(statistic);
      console.log(statistic);
    }
    getStat();
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
        backgroundImage: "linear-gradient(45deg, #4fc3f7, #01579b)",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "80%",
          maxWidth: "600px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          border: "1px solid #ccc",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          borderRadius: "10px",
          transform: "translateY(20%)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h2>Hasil</h2>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              padding: "10px",
              marginBottom: "10px",
              color: "#333",
              backgroundColor: "rgba(127, 182, 200, 0.9)",
              borderRadius: "5px",
              boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            }}
          >
            Jumlah Dikerjakan : {stat.question_answered}
          </div>
          <div
            style={{
              padding: "10px",
              marginBottom: "10px",
              color: "#333",
              backgroundColor: "rgba(127, 182, 200, 0.9)",
              borderRadius: "5px",
              boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            }}
          >
            Ketepatan :{" "}
            {Math.floor((stat.right_answer / stat.question_answered) * 100)}%
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              padding: "10px",
              margin: "5px",
              width: "30%",
              textAlign: "center",
              color: "#333",
              borderRadius: "5px",
              boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            }}
          >
            Sila Pertama :
            {stat.sila_right_answer ? Math.floor((stat.sila_right_answer[0] / stat.sila_occurences[0]) * 100 ) : "tes" }%
          </div>
          <div
            style={{
              padding: "10px",
              margin: "5px",
              width: "30%",
              textAlign: "center",
              color: "#333",
              borderRadius: "5px",
              boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            }}
          >
            Sila Kedua : {stat.sila_right_answer ? Math.floor((stat.sila_right_answer[1] / stat.sila_occurences[1]) * 100 ) : "tes" }%
          </div>
          <div
            style={{
              padding: "10px",
              margin: "5px",
              width: "30%",
              textAlign: "center",
              color: "#333",
              borderRadius: "5px",
              boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            }}
          >
            Sila Ketiga : {stat.sila_right_answer ? Math.floor((stat.sila_right_answer[2] / stat.sila_occurences[2]) * 100 ) : "tes" }%
          </div>
          <div
            style={{
              padding: "10px",
              margin: "5px",
              width: "30%",
              textAlign: "center",
              color: "#333",
              borderRadius: "5px",
              boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            }}
          >
            Sila Keempat : {stat.sila_right_answer ? Math.floor((stat.sila_right_answer[3] / stat.sila_occurences[3]) * 100 ) : "tes" }%
          </div>
          <div
            style={{
              padding: "10px",
              margin: "5px",
              width: "30%",
              textAlign: "center",
              color: "#333",
              borderRadius: "5px",
              boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            }}
          >
            Sila Kelima : {stat.sila_right_answer ? Math.floor((stat.sila_right_answer[4] / stat.sila_occurences[4]) * 100 ) : "tes" }%
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href="/play" passHref>
            <button
              style={{
                backgroundColor: "#ff7043",
                color: "white",
                border: "none",
                padding: "10px 20px",
                margin: "0 10px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                borderRadius: "5px",
                boxShadow: "0 0 5px rgba(0,0,0,0.2)",
              }}
            >
              Main Lagi
            </button>
          </Link>
          <Link href="/" passHref>
            <button
              style={{
                backgroundColor: "#ff7043",
                color: "white",
                border: "none",
                padding: "10px 20px",
                margin: "0 10px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                borderRadius: "5px",
                boxShadow: "0 0 5px rgba(0,0,0,0.2)",
              }}
            >
              Kembali
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
