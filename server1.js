var srv = require('http');
var i = 1;

function onRequest(req, res){	
  var page = "";
  var d = new Date();

  page += "<html><head><title>";
  // title
  page += "Hello";
  //
  page += "</title></head><body>";

  // boby
  page += "<h1>Hello world!</h1>";
  //
  page += "<p>Counter: "+i+", date: "+d.toLocaleString()+"</p>";
  page += "</body></html>";
  
  console.log(d.toLocaleString()+" counter: %i",i);

  i++;

  res.writeHeader(200, {'content-type': 'text/html'});
  res.end(page);
};

srv.createServer(onRequest).listen(8080);

console.log('Server running on 8080');
