//======Node.js CRUDO=====

// const http= require('http');

// const hostname='127.0.0.1';
// const port=3000;

// const server=http.createServer((req, res)=>{
//     res.statusCode=200;
//     res.setHeader('Content-type', 'text/plain');
//     res.end('Hola mundo!')
// })

// server.listen(port, hostname, ()=>{
//     console.log(`El servidor esta en linea en http://${hostname}:${port}`)
// })

//====EXPRESS======

var express = require('express');
var app = express();
app.get('/', function(req, res) {
 res.send('Hola Mundo!');
});
app.listen(3000, function() {
 console.log('Aplicación ejemplo, escuchando el puerto 3000!');
}); 