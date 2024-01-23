'use client'
import { useState } from "react"
import NumberDisplay from "@/components/NumberDisplay"
import generateRandomNumbers from "@/functions/randomNumbers"

export default function numbers() {
    const [length, setLength] = useState(1)
    const [numbers, setNumbers] = useState<number[]>([])

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            flexDirection: 'column'
        }}>
            <h1>Generate Numbers</h1>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
            }}>
                {numbers.map(number => <NumberDisplay value={number} />)}
            </div>
            <div>
                <input type="number" max={15} min={5} onChange={e => setLength(+e.target.value)} value={length}/>
                <button onClick={() => setNumbers(generateRandomNumbers(length))}>Gerenate</button>
            </div>
        </div>
    )
}