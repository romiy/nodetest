var net = require('net');

var client = new net.Socket();
client.setEncoding('utf8');

client.connect('8123', 'localhost', function(){
  console.log('connected to server');
  client.write('i am here');
});

process.stdin.resume();

process.stdin.on('data', function(data){
  if (data.toString() === '^\r\n')
    client.end() 
  else
    client.write(data);
});

client.on('data', function(data){
  console.log(data);
});

client.on('close', function(data){
  console.log('connection closed');
});

client.on('error', function(data){
  console.log('some error hapens, connection will closed');
});