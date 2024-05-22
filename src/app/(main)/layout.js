"use client";
import { createContext, useContext, useState } from "react";
import ScorePage from "./play/score/page";
import PlayPage from "./play/page";

export const StatisticContext = createContext();

export default function RootLayout({ children }) {
  const [lastTotalScore, setLastTotalScore] = useState();

  return (
    <html lang="en">
      <body>
        <StatisticContext.Provider
          value={{ lastTotalScore, setLastTotalScore }}
        >
          {children}
        </StatisticContext.Provider>
      </body>
    </html>
  );
}
