import { NextResponse } from "next/server";
import saySomething from "../../../services/open-api/textToSpeech";

export async function GET() {
    let audioBlob = saySomething('test')
  return NextResponse.json({ data: audioBlob });
}