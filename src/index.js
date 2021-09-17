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
  let niceNumber = niceFraction * base

  // Fix 3 * 0.1 === 0.30000000000000004 issue (see IEEE 754).
  // 20 is the uppper bound of toFixed.
  // Copied from https://github.com/apache/echarts/blob/1bbeff5be541a392d139105b63004880fc1eeeb9/src/util/number.ts#L481
  if (exponent >= -20) {
    niceNumber = Number(niceNumber.toFixed(exponent < 0 ? -exponent : 0))
  }

  return isNegative ? -niceNumber : niceNumber
}

export default toNiceNumber
