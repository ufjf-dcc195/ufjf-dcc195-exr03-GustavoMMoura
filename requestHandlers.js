var exec = require("child_process").exec;
var qs = require("querystring");

function impares (request, response) {
		response.writeHead(200, {"Content-Type":"text/html"});
		response.write("<h1>Números ímpares de 1 a 100:</h1>");
		response.write("<p>");
		for (var i = 1; i <= 100; i+=2) {
			response.write(i + " ");	
		}
		response.write("</p>");
		response.end();
}

function oculto(request, response) {
	if(request.method == "GET") {
		response.writeHead(200, {"Content-Type":"text/html"});
		response.write("<h1>Insira a senha</h1>");
		response.write("<form method=post >");
		response.write("<input type=text name=senha />");
		response.write("<input type=submit />");
		response.write("</form>");
		response.end();
	} else {
		var body = '';
		request.on('data', function(data)  {
			body += data;
		});
		
		request.on('end', function(data)  {
			var dados = qs.parse(body);
			response.writeHead(200, {"Content-Type":"text/html"});
			if (dados.senha == '54321') {
				response.write("<h1>Acertou!</h1>");
			} else {
				response.write("<p><h1>Não autorizado!</h1></p>");
				response.write("<h1>Insira a senha</h1>");
				response.write("<form method=post >");
				response.write("<input type=text name=senha />");
				response.write("<input type=submit />");
				response.write("</form>");
			}
			response.end();
		});
	}	
}

function intervalo(request, response) {
	if(request.method == "GET") {
		response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
		response.write("<form method=post >");
		response.write("<h1>Insira o intervalo inteiro:</h1>");
		response.write("De ");
		response.write("<input type=number name=first />");
		response.write(" a ");
		response.write("<input type=number name=second />");
		response.write("<input type=submit />");
		response.write("</form>");
		response.end();
	} else {
		var body = '';
		request.on('data', function(data)  {
			body += data;
		});
		
		request.on('end', function(data)  {
			var dados = qs.parse(body);			
			response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});			
			var first = parseInt(dados.first);
			var second = parseInt(dados.second);
			if (isNaN(first) || isNaN(second)) {
				response.write("<h1>Números inválidos</h1>");
			} else {
				if (first > second) {
					response.write("<h1>Números inválidos</h1>");
				} else {
					response.write("<h1>A série de inteiros é: </h1>");				
					for (var i = first; i <= second; i++) {
						response.write(i + " ");	
					}
				}
			}

			response.write("<p><form method=post >");
			response.write("<h1>Insira o intervalo inteiro:</h1>");
			response.write("De ");
			response.write("<input type=number name=first />");
			response.write(" a ");
			response.write("<input type=number name=second />");
			response.write("<input type=submit />");
			response.write("</form></p>");
			response.end();
		});
	}
}

function naoencontrado(request, response) {
	response.writeHead(404, {"Content-Type":"text/plain; charset=utf-8"});
	response.write("Recurso não encontrado");
	response.end();
}

exports.impares = impares;
exports.oculto = oculto;
exports.intervalo = intervalo;
exports.naoencontrado = naoencontrado;