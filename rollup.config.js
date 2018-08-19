import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import { uglify } from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'
// import cleanup from 'rollup-plugin-cleanup';
import gzip from 'rollup-plugin-gzip'
import livereload from 'rollup-plugin-livereload'
import sass from 'node-sass'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    file: 'public/bundle.js',
    name: 'app'
  },
  plugins: [
    production || livereload(),

    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: css => {
        css.write('public/bundle.css')
      },

      // this results in smaller CSS files
      cascade: false,

      preprocess: {
        style: ({ content, attributes }) => {
          if (attributes.type !== 'text/scss') return

          // eslint-disable-next-line
          return new Promise((fulfill, reject) => {
            sass.render({
              data: content,
              includePaths: ['src', 'node_modules'],
              sourceMap: true,
              outFile: 'x' // this is necessary, but is ignored
            }, (err, result) => {
              if (err) return reject(err)

              fulfill({
                code: result.css.toString(),
                map: result.map.toString()
              })
            })
          })
        }
      }
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve(),
    commonjs(),

    // If we're building for production (npm run build
    // instead of npm run dev), transpile and minify
    production && buble({ exclude: 'node_modules/**' }),
    // production && cleanup(),
    production && uglify({}, minify),
    production && gzip()
  ]
}
