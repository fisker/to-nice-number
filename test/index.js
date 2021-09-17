import test from 'ava'
import {table as createTable} from 'table'
import toNiceNumber from '../src/index.js'

const columns = ['#', 'Number', 'Nice Number', 'Round']
const tableConfig = {
  columns: [
    {alignment: 'center'},
    {alignment: 'left'},
    {alignment: 'left'},
    {alignment: 'center'},
  ],
}
const createSnapShot = (numbers, round) => {
  const result = numbers.map((number, index) => [
    index + 1,
    number,
    toNiceNumber(number, round),
    round ? 'Y' : 'N',
  ])

  const table = createTable([columns, ...result], tableConfig)

  return `\n${table}\n`
}

let numbers = [
  0, 0.123_456_789, 0.234_567_89, 0.345_678_9, 0.456_789, 0.567_89, 0.6789,
  0.789, 0.89, 0.9, 1,
]

numbers = numbers
  .flatMap((number) => [number, number * 2, number + number / 10, number * Math.PI])
  .flatMap((number) => [number, number / 1000, number * 1000])
  .flatMap((number) => [number, -number])
numbers = [...new Set(numbers)].sort()

test('main', (t) => {
  t.snapshot(createSnapShot(numbers, false))
})

test('round', (t) => {
  t.snapshot(createSnapShot(numbers, true))
})
