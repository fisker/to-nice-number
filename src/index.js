function toNiceFranction(fraction) {
  if (fraction <= 1) {
    return 1
  }
  if (fraction <= 2) {
    return 2
  }
  if (fraction <= 5) {
    return 5
  }

  return 10
}

function toRoundedNiceFranction(fraction) {
  if (fraction < 1.5) {
    return 1
  }
  if (fraction < 3) {
    return 2
  }
  if (fraction < 7) {
    return 5
  }

  return 10
}

function toNiceNumber(number, round = false) {
  const isNegative = number < 0

  if (isNegative) {
    number = Math.abs(number)
  }

  const exponent = Math.floor(Math.log10(number))
  const base = 10 ** exponent
  const fraction = number / base
  const niceFraction = (round ? toRoundedNiceFranction : toNiceFranction)(
    fraction,
  )
  const niceNumber = niceFraction * base

  return isNegative ? -niceNumber : niceNumber
}

export default toNiceNumber
