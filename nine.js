/*
Make the callbacks to do one after another.
*/


var http=require('http'),bl=require('bl'),url1=process.argv[2], url2=process.argv[3],url3=process.argv[4];

// console.log("url1: "+url1+"\nurl2: "+url2+"\nurl3: "+url3)
var data1, data2, data3, data1c=false, data2c=false, data3c=false;
var buffer = [];


http.get(url1, function(response){
	response.pipe(bl(function(err, data){
		data1=data.toString();	
		http.get(url2, function(response){
			response.pipe(bl(function(err, data){
				data2=data.toString();
				http.get(url3, function(response){
					response.pipe(bl(function(err, data){
						data3=data.toString();
						console.log(data1+"\n"+data2+"\n"+data3)
					}))
				})

			}))
		})

	}))
})




