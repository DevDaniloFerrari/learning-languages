import saySomething from "@/services/textToSpeech"
import { frenchNumberTranscriptions } from "@/models/frenchNumberTranscriptions"

interface NumberDisplayProps {
    value: number;
}

export default function NumberDisplay(props: NumberDisplayProps) {
    const speak = async () => {
        const audio = await saySomething(frenchNumberTranscriptions[props.value])
        const audioElement = new Audio(audio)
        audioElement.play()
    }

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50px',
                width: '50px',
                borderRadius: '25px',
                backgroundColor: '#222',
                color: '#fff',
                fontSize: '2rem',
                margin: '20px',
                cursor: 'pointer'
            }}
                onClick={async () => {
                    await speak()
                }}>
                {props.value}
            </div>
        </>
    )
}