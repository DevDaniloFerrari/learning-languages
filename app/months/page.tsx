"use client";
import { monthTranscriptions } from "@/models/french/monthTranscription";

export default function months() {
  const speak = (monthsNumber: number) => {
    const audioElement = new Audio(`audios/months/${monthsNumber}.mp3`);
    audioElement.play();
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Months</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {Object.keys(monthTranscriptions).map((monthsNumber) => (
          <div
            style={{
              width: "100px",
              height: "50px",
              background: "black",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => speak(+monthsNumber)}
          >
            {monthTranscriptions[+monthsNumber]}
          </div>
        ))}
      </div>
    </div>
  );
}
