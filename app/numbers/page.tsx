'use client'
import { useEffect, useState } from "react"
import NumberDisplay from "@/components/NumberDisplay"
import generateRandomNumbers from "@/functions/randomNumbers"

export default function numbers() {
    const [length, setLength] = useState(5)
    const [numbers, setNumbers] = useState<number[]>([])

    useEffect(() => {
        setNumbers(generateRandomNumbers(length))
    }, [])

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <h1>Generate Numbers</h1>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
                {numbers.map(number => <NumberDisplay value={number} />)}
            </div>
            <div>
                <input type="number" min={1} max={100} onChange={e => setLength(+e.target.value)} value={length}/>
                <button onClick={() => setNumbers(generateRandomNumbers(length))}>Gerenate</button>
            </div>
        </div>
    )
}