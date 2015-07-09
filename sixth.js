/*
var f = require('filter')
f.filterList(dirname, extension, function(err, data){
	data.forEach(function(file){
		console.log(file)
	})
})
*/

var f = require('./filter');
var extension = "."+process.argv[3],
path = process.argv[2];

// f.listFile(path, extension, function(files){

// 	files.forEach(function(file){
// 		console.log(file)
// 	})
// // })
// f.listFile(path, extension, function(o){
// 	console.log(o)
// })

f.doStuff(path, extension, function(err, list){
	// console.log(checking)
	list.forEach(function(element){
		console.log(element)
	})
})