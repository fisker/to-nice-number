import test from 'ava'
import toNiceNumber from '../src/index.js'

const createSnapShot = (number, round) => ({
  number,
  round,
  nice: toNiceNumber(number, round),
})

let numbers = [
  0, 1, 1.234_567_89, 1.345_678_9, 1.456_789, 1.567_89, 1.6789, 1.789, 1.89,
  1.9,
]

numbers = numbers.flatMap((number) => [
  -number,
  number * 2,
  number + number / 10,
  number * Math.PI,
  number * Math.PI * 1000,
  number * 1000,
])
numbers = [...new Set(numbers)].sort()

test('main', (t) => {
  for (const number of numbers) {
    t.snapshot(createSnapShot(number, false))
  }
})

test('round', (t) => {
  for (const number of numbers) {
    t.snapshot(createSnapShot(number, true))
  }
})
