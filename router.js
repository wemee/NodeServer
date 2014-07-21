
function route(pathname, query, handler, response){
	if(typeof(handler[pathname]) === "function"){

	} else {
		response.writeHead(404);
		response.end("404 not found");
	}
}

exports.route = route;