var net = require('net');
var i = 0;
var tcpserver = net.createServer(function(conn){
  i++;
  console.log('has connection #%i ',i);

  conn.on('data', function(data){
    console.log('data recieved:'+data+' from'+conn.remoteAddress+':'+conn.remotePort);
    conn.write(data.toString().toUpperCase());
  });
  conn.on('end', function(){
    console.log('client '+conn.remoteAddress+':'+conn.remotePort+' ends session');
  });
  conn.on('error', function(){
    console.log('some error hapens, server will shutdown');
  });
}).listen(8123);

console.log('listen on port 8123');