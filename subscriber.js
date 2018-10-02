var http = require('http');
var faye = require('faye');

var server = http.createServer()

server.listen(8001);

var client = new faye.Client('http://localhost:8000/');

client.subscribe('/messages', function(message) {
  console.log('Got a message: ' + message.text);
});
