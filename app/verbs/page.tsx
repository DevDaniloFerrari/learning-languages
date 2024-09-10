"use client";
import { useState } from "react";
import verbs from "@/verbs.json";
import { useForm, SubmitHandler } from "react-hook-form";

export default function page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="je">je: </label>
          <input id="je" {...register("je", { required: true })} />
        </div>
        <div>
          <label htmlFor="tu">tu: </label>
          <input id="tu" {...register("tu", { required: true })} />
        </div>
        <div>
          <label htmlFor="il_elle">il/elle: </label>
          <input id="il_elle" {...register("il_elle", { required: true })} />
        </div>
        <div>
          <label htmlFor="nous">nous: </label>
          <input id="nous" {...register("nous", { required: true })} />
        </div>
        <div>
          <label htmlFor="vous">vous: </label>
          <input id="vous" {...register("vous", { required: true })} />
        </div>
        <div>
          <label htmlFor="ils_elles">ils/elles: </label>
          <input
            id="ils_elles"
            {...register("ils_elles", { required: true })}
          />
        </div>
        <input type="submit" />
      </form>

      <button onClick={() => getVerb()}>New Verb</button>
    </div>
  );
}
