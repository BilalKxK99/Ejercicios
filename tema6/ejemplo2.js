#!/usr/bin/env node

var express=require('express');
var app = express();
var port = process.env.PORT || 8080;


// Endpoint principal

app.get('/', function (req, res) {
    res.send("Este es el ejercicio 2 del hito 6 de IV");
});

// ¿En qué asignatura estamos?

app.get('/asignatura', function (req, res) {
    res.send("Esto es Infraestructura Virtual");
});



// Obtener el nombre del alumno

app.get('/alumno', function (req, res) {
    res.send("Soy Bilal");
});



app.listen(port);
console.log('Server running at http://127.0.0.1:'+port+'/');


module.exports = app;
