
function start(port, handler){
  var http = require("http");
  var url = require("url");
  var router = require("./router")

  http.createServer(
    function(request, response){
    	pathname = url.parse(request.url).pathname;
    	query = url.parse(request.url).query;
    	router.route(pathname, query, handler, response);
    }
  ).listen(port);
}

exports.start = start;