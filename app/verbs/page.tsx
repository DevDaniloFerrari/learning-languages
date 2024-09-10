"use client";
import { useState } from "react";
import verbs from "@/verbs.json";

export default function page() {
  const [verb, setVerb] = useState<any>([]);

  function getVerb() {
    const index = Math.round(Math.random() * 100);
    setVerb(verbs[index]);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Verb Conjugation</h1>
      <h2>{verb.verb}</h2>
      <div>
        <label htmlFor="je">je: </label>
        <input name="je" id="je" />
      </div>
      <div>
        <label htmlFor="tu">tu: </label>
        <input name="tu" id="tu" />
      </div>
      <div>
        <label htmlFor="il_elle">il/elle: </label>
        <input name="il_elle" id="il_elle" />
      </div>
      <div>
        <label htmlFor="nous">nous: </label>
        <input name="nous" id="nous" />
      </div>
      <div>
        <label htmlFor="vous">vous: </label>
        <input name="vous" id="vous" />
      </div>
      <div>
        <label htmlFor="ils_elles">ils/elles: </label>
        <input name="ils_elles" id="ils_elles" />
      </div>
      <button onClick={() => getVerb()}>New Verb</button>
    </div>
  );
}
