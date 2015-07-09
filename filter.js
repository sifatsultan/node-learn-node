var fs = require('fs'),
path = require('path'),
sortedFiles = [];

// exports.doStuff = function(input, callback){
// 	var error = "Hello this is an error"
// 	callback(input, error)
// };
// exports.stuff = "hello"

exports.doStuff= function(p,e,callback){

	var sortedFiles = [];
	var error;
	var checking = "I am just checking";
	// console.log("Path: "+p+" Extension: "+e+"\n")

	// console.log(files[0])
	fs.readdir(p,function(err, files){
		
		//just checking
		files.forEach(function(file){
			// console.log(file)	
			if(path.extname(file) == e){
				// console.log(files[i])
				sortedFiles.push(file)
			}
		})
	// sortedFiles.forEach(function(file){
	// 	console.log(file)
	// })

	return callback(error,sortedFiles)	

})
}


