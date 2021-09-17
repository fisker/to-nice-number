function toNiceNumber(number, round = false) {
  const isNegative = number < 0
  const exponent = Math.floor(Math.log10(Math.abs(number)))
  const base = 10 ** exponent
  const fraction = number / base

  let niceFraction
  if (round) {
    if (fraction < 1.5) {
      niceFraction = 1
    } else if (fraction < 3) {
      niceFraction = 2
    } else if (fraction < 7) {
      niceFraction = 5
    } else {
      niceFraction = 10
    }
  } else {
    if (fraction <= 1) {
      niceFraction = 1
    } else if (fraction <= 2) {
      niceFraction = 2
    } else if (fraction <= 5) {
      niceFraction = 5
    } else {
      niceFraction = 10
    }
  }

  const niceNumber = niceFraction * base

  return isNegative ? -niceNumber : niceNumber
}

export default toNiceNumber
