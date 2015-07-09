var fs = require('fs')
var p = require('path')

/*

fs.readdir(path, callback)# Asynchronous readdir(3). Reads the contents of a
directory. The callback gets two arguments (err, files) where files is an
array of the names of the files in the directory excluding '.' and '..'.


path.extname('index.html')
// returns
'.html'
*/

var extension = "."+process.argv[3],
	path = process.argv[2],
	sortedFiles = [];


fs.readdir(path,function(err, files){
	// console.log(files[0])
	for (var i = 0; i < files.length; i++) {
		if(p.extname(files[i]) == extension){
			// console.log(files[i])
			sortedFiles.push(files[i])
		}
		// console.log(p.extname(files[i]))

	};
	for (var i = 0; i < sortedFiles.length; i++) {
		console.log(sortedFiles[i])
	};
})


// fs.readdir()