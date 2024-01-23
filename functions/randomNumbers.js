export default function generateRandomNumbers(length) {
    let numbers = []

    for (let index = 0; index < length; index++)
        numbers.push(Math.round(Math.random() * 100))

    return numbers
}