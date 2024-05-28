"use client";

import { cetak } from "@/utils/cetak";
import Image from "next/image";
import { useEffect, useState } from "react";

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

export default function PlayPage() {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [time, setTime] = useState(10000);

  function onAnswerEventHandler(event) {
    const answer = event.target.id;
    const currentQuestion = questions[questionIndex];
    const statistic = JSON.parse(sessionStorage.getItem("statistic"));
    cetak(statistic);

    statistic.question_answered++;

    statistic.sila_occurences[currentQuestion.sila_number - 1] =
      statistic.sila_occurences[currentQuestion.sila_number - 1] + 1;

    if (answer.toString() === currentQuestion.sila_number.toString()) {
      setTotalScore((prevScore) => prevScore + currentQuestion.score);

      statistic.right_answer++;
      statistic.sila_right_answer[currentQuestion.sila_number - 1] =
        statistic.sila_right_answer[currentQuestion.sila_number - 1] + 1;

      const prevScore = parseInt(sessionStorage.getItem("totalScore"));
      sessionStorage.setItem("totalScore", prevScore + currentQuestion.score);

      setTime((prevTime) => prevTime + 10000);
    } else {
      setTime((prevTime) => prevTime - 5000);
    }

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      window.location.replace("/play/score/");
    }

    sessionStorage.setItem("statistic", JSON.stringify(statistic));
  }

  useEffect(() => {
    async function getQuestions() {
      sessionStorage.setItem("totalScore", 0);
      const res = await fetch(`/api/questions  `, {
        next: { revalidate: 0 },
      }).then((r) => r.json());
      cetak(res);
      setQuestions(res.data.questions || []);
    }
    getQuestions();

    const statistic = {
      question_answered: 0,
      right_answer: 0,
      sila_occurences: [0, 0, 0, 0, 0],
      sila_right_answer: [0, 0, 0, 0, 0],
    };

    sessionStorage.setItem("statistic", JSON.stringify(statistic));
  }, []);

  useEffect(() => {
    function timer() {
      questions.length !== 0 && setTime(time - 1000);

      if (questions.length !== 0 && time <= 0) {
        window.location.replace("/play/score/");
      }
    }
    const interval = setInterval(timer, 1000);

    return () => clearInterval(interval);
  });

  return (
    <body
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ffffff",
        color: "#000000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "25px",
        }}
      >
        Time{" "}
        <span id="timer">
          <br />
          {millisToMinutesAndSeconds(time)}
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          fontSize: "25px",
        }}
      >
        Skor: <span id="score">{totalScore}</span>
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "40px",
          maxWidth: "1500px",
          marginBottom: "100px",
          marginTop: "300px",
          lineHeight: "1.5",
        }}
      >
        {questions.length > 0 ? `${questions[questionIndex].question}` : ""}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div className="option">
          <Image
            onClick={onAnswerEventHandler}
            id="1"
            src="/images/1.png"
            alt="Pilihan 1"
            width={150}
            height={150}
            style={{
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />
        </div>
        <div className="option">
          <Image
            onClick={onAnswerEventHandler}
            id="2"
            src="/images/5.png"
            alt="Pilihan 2"
            width={150}
            height={150}
            style={{
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />
        </div>
        <div className="option">
          <Image
            onClick={onAnswerEventHandler}
            id="3"
            src="/images/3.png"
            alt="Pilihan 3"
            width={150}
            height={150}
            style={{
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />
        </div>
        <div className="option">
          <Image
            onClick={onAnswerEventHandler}
            id="4"
            src="/images/4.png"
            alt="Pilihan 4"
            width={150}
            height={150}
            style={{
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />
        </div>
        <div className="option">
          <Image
            onClick={onAnswerEventHandler}
            id="5"
            src="/images/2.png"
            alt="Pilihan 5"
            width={150}
            height={150}
            style={{
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />
        </div>
      </div>
    </body>
  );
}
