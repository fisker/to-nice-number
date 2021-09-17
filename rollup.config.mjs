import product from 'fast-cartesian-product'
import {babel} from '@rollup/plugin-babel'
import prettier from 'rollup-plugin-prettier'
import {terser} from 'rollup-plugin-terser'

const input = 'src/index.js'

const builds = product([
  [
    {format: 'umd', extension: 'js', name: 'toNiceNumber'},
    {format: 'cjs', extension: 'cjs'},
    {format: 'esm', extension: 'mjs'},
  ],
  [false, true],
]).map(([{format, extension, name}, minify]) => {
  const plugins = minify ? [terser()] : [prettier({parser: 'meriyah'})]
  const file = `dist/index${minify ? '.min' : ''}.${extension}`

  if (format === 'umd') {
    plugins.push(babel({babelHelpers: 'bundled'}))
  }

  return {
    input,
    output: {
      file,
      format,
      name,
      // removes code bellow from boundle
      // Object.defineProperty(exports, '__esModule', {value: true})
      esModule: false,
      exports: 'auto',
    },
    plugins,
  }
})

export default builds
