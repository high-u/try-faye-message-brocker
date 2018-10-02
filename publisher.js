var faye = require('faye');

var client = new faye.Client('http://localhost:8000/');

var publication = client.publish('/messages', {
  text: 'Hello world'
});
publication.then(function() {
  console.log('Message received by server!');
  process.exit();
}, function(error) {
  console.log('There was a problem: ' + error.message);
  process.exit();
});


