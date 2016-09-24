var express = require('express');
// cria uma instancia de express chamada app
var app = express();

// aplica o GET um metodo de roteamento HTTP, na rota raiz '/'
app.get('/', function (req, res) {
  // aplica o metodo de resposta .send() que envia resposta de vários tipos
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Exemplo rodando na porta 3000');
});