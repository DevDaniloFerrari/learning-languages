import { frenchNumberTranscriptions } from "@/models/french/numberTranscriptions";
import { saveAs } from "file-saver";
import saySomething from "../services/open-api/textToSpeech";

function blobToArrayBuffer(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function () {
      if (reader.result instanceof ArrayBuffer) {
        resolve(reader.result);
      } else {
        reject(new Error("Conversion to ArrayBuffer failed."));
      }
    };

    reader.onerror = function () {
      reject(new Error("Error reading the Blob."));
    };

    reader.readAsArrayBuffer(blob);
  });
}

export default function NumberDisplay(props) {
  const speak = async () => {
    // for (let index = 0; index <= 99; index++) {
    //   const audio = await saySomething(frenchNumberTranscriptions[index])
    //   saveAs(audio, `${index}.mp3`);
    // }
    // const filePath = path.join(__dirname, 'audios', 'speech.mp3'); // Adjust the folder path and file name as needed
    // fs.writeFileSync(filePath, Buffer.from(arrayBuffer, 'binary'));

    // const audio = await saySomething('dimanche')
    // saveAs(audio, `7.mp3`);

    const audioElement = new Audio(`audios/numbers/${props.value}.mp3`)
    audioElement.play()
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
          width: "50px",
          borderRadius: "25px",
          backgroundColor: "#222",
          color: "#fff",
          fontSize: "2rem",
          margin: "20px",
          cursor: "pointer",
        }}
        onClick={async () => {
          await speak();
        }}
      >
        {props.value}
      </div>
    </>
  );
}
