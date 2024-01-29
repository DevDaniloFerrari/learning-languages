"use client";
import { dayTranscriptions } from "@/models/french/dayTranscriptions";

export default function days() {
  const speak = (dayNumber: number) => {
    const audioElement = new Audio(`audios/days/${dayNumber}.mp3`);
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
      <h1>Generate Numbers</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {Object.keys(dayTranscriptions).map((dayNumber) => (
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
            onClick={() => speak(+dayNumber)}
          >
            {dayTranscriptions[+dayNumber]}
          </div>
        ))}
      </div>
    </div>
  );
}
