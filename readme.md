# to-nice-number

> A JavaScript implementation of "Nice Numbers for Graph Labels" from Graphic Gems

## Install

```bash
yarn add to-nice-number
```

## Files

```text
dist/
├─ index.js         ( UMD )
├─ index.min.js     ( UMD, compressed )
├─ index.mjs        ( ES Module )
├─ index.min.mjs    ( ES Module, compressed )
├─ index.cjs        ( CommonJS )
└─ index.min.cjs    ( CommonJS, compressed )
```

## Usage

### browser

```html
<script type="module">
  import toNiceNumber from 'https://unpkg.com/to-nice-number?module'

  console.log(toNiceNumber(Math.PI))
  // => 5
</script>
```

### node

```js
import toNiceNumber from 'to-nice-number'

console.log(toNiceNumber(Math.PI))
// => 5
```

## API

### toNiceNumber(number, round = false)

Get "nice" number for given `number`

## Links

- ["Nice Label Algorithm for Charts with minimum ticks"](https://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks)
