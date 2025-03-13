"use client";
import React, { useEffect, useState } from "react";

const AnnouncementBarText = ({ text }: { text: string }) => {
  const [revealed, setRevealed] = useState<string>("");
  const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const revealText = async () => {
      let currentText = "";
      for (const char of text) {
        currentText += char;
        setRevealed(currentText);
        await sleep(100);
      }
    };
    revealText();
  }, [text]);
  return <p>{revealed}</p>;
};

export default AnnouncementBarText;
