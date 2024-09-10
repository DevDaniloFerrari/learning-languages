import { useState } from "react";
import getConjugation from "../../services/open-api/getConjugation";
import fs from "fs";

export default function page() {
  var verbs: any[] = [];

  async function generate() {
    const conjugation = await getConjugation(verbs);
    verbs.push(conjugation)
    return verbs
  }

  async function batch() {
  var verbsAgain: any[] = [];
    for (let index = 0; index < 100; index++) {
      verbsAgain = await generate();
    }

    const data = {
      itens: verbsAgain,
    };
    console.log(verbsAgain)

    const jsonString = JSON.stringify(data, null, 2);

    // Write the JSON string to a file
    fs.writeFile("data.json", jsonString, (e: any) => {
      if (e) {
        console.error("Error writing file", e);
      } else {
        console.log("File has been saved");
      }
    });
  }

  // batch().then(() => {
  //   console.log('iniciei')
  // })

  return <button>Gerenate</button>;
}
