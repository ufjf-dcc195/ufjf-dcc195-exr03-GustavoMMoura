var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handlers = {};
handlers["/impares.html"] = requestHandlers.impares;
handlers["/oculto.html"] = requestHandlers.oculto;
handlers["/intervalo.html"] = requestHandlers.intervalo;
handlers["/notfound"] = requestHandlers.naoencontrado;

server.start(router, handlers);