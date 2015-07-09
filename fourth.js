var fs = require('fs');

// console.log(process.argv[2])

fs.readFile(process.argv[2], 'utf8', function(err, data){
	var stringArray = data.split("\n")
	var lines = stringArray.length - 1
	console.log(lines)
})

