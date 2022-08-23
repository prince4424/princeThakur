var fs = require('fs')
var file = process.argv[2]

fs.readFile('./test3.js', function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
  console.log(contents)
})