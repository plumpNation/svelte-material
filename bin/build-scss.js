const fs = require('fs')

const sass = require('node-sass')

const file = 'src/index.scss'
const outFile = 'public/assets/index.css'

sass.render({
  file,
  includePaths: ['src', 'node_modules'],
  outFile
}, (err, result) => {
  console.log(err || result)

  fs.writeFile(outFile, result.css, err => {
    if (err) console.error(err)
  })
})
