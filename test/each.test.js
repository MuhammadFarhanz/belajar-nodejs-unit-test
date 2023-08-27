import { sumAll } from "../src/sum";

// const table = [
//     [[10,10,10],30],
//     [[10,10,10,10,10],50],
//     [[10,10,10,10,10,10,10],70]
// ]

const table = [
    {numbers:[10,10,10], expected:30},
    {numbers:[10,10,10,10,10], expected: 50},
    {numbers:[10,10,10,10,10,10,10], expected:70}
]

test.each(table)("test sum(%s) should result %i", ({numbers, expected}) => {
    expect(sumAll(numbers)).toBe(expected)
})