const http = require('http');

const servidor = http.createServer(function(req, resp) {
    resp.end(`<h1>Teste</h1>`)
});
servidor.listen(3000);
