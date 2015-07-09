var fs = require('fs');	

var string = fs.readFileSync(process.argv[2], 'utf8')

// var string = buffer.toString();

var array = string.split('\n')

// get number of lines
var elements = array.length;
// actual lines
var lines = elements - 1

console.log(lines)