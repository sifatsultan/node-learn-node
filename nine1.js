var http = require('http'),
bl=require('bl'),
url1 = process.argv[2],
data1, data2, data3,
data=[]


function httpSync(index){
	var i = index;
	http.get(process.argv[i+2], function(response){
		response.pipe(bl(function(err, d){
			data[i] = d;
			if(i==3){
				d.forEach(function(element){
					console.log(element+"\n")
				});
			};
		}))

	})	
}

for(var i=0;i<3;i++){
	httpSync(i)
}


