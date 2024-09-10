const axios = require("axios");

export default async function getConjugation(verbs) {
  const jsonExample = `{
        "verb": "",
        "present": {
          "je": "",
          "tu": "",
          "il_elle": "",
          "nous": "",
          "vous": "",
          "ils_elles": ""
        }
      }`;

  const requestData = {
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant designed to output JSON.",
      },
      {
        role: "user",
        content: `Please provide a random French verb that is not in ${verbs.map(x => x.verb).join(',')} and show its conjugation in this format: ${jsonExample}.`,
      },
    ],
    model: "gpt-3.5-turbo-0125",
    response_format: { type: "json_object" },
  };

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      requestData,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const conjugation = JSON.parse(response.data.choices[0].message.content);
    console.log(conjugation);
    return conjugation
  } catch (error) {
    console.error(
      "Error generating conjugation:",
      error.response ? error.response.data : error.message
    );
  }
}
