var net = require('net')

var server = net.createServer(function(socket){
	console.log('Client Address: '+socket.address().address+" , port:"+socket.address().port);
	socket.on('end', function(){
		console.log('client disconnected')
	})
	socket.write("Hello this is node bro...take care",'utf8', function(){
		console.log('Data sent out')
	})
})

server.listen(3000, function(){
	console.log('tcp server listering at port: 3000')
})