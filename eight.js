var http = require('http'), url = process.argv[2], bl = require('bl');


http.get(url, function(response){
	// response.setEncoding('utf8')
	response.pipe(bl(function(err, data){
		console.log(data.length)
		console.log(data.toString())

	}))


	// console.log("String: "+string)
})
