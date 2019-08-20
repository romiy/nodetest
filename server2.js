var srv = require('http');

function onRequest(req, res){	
  res.writeHeader(200, {'content-type': 'text/html'});

  var o = global;
  var page = "";

  page += "<html><head><title>";
  // title
  page += "global";
  //
  page += "</title></head><body>";

  // boby header
  page += "<h1>global</h1>";

  // body
  page += "<p>"+o+"</p>";

  page += "</body></html>";

  res.write(page);

  res.end();
};

srv.createServer(onRequest).listen(8080);

console.log('Server running on 8080');
