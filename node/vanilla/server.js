var http = require('http');
http.createServer(function (req,res){
res.writeHead(200, {'Content-Type':'text/html'});
res.end('<a href="http://chitalu.hopto.org">Home</a>');
}).listen(3000,"127.0.0.1");
console.log('Server running on 3000');
