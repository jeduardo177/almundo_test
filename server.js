/**
 * Created by Jose on 18/03/2017.
 */

// Invocar modo JavaScript 'strict'
'use strict';

// Configurar la variable 'NODE_ENV'
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Cargar las dependencias de módulos
var mongoose = require('./config/mongoose'),
    express = require('./config/express');

//Para middleware no aplica en este demo pero dejo para futura implementación
//passport = require('./config/passport');

// Crear una nueva instancia conexión Mongoose
var db = mongoose();

// Crear una nueva instancia aplicación Express
var app = express();

// Configurar el middleware Passport
//var passport = passport();

/*// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});*/

// Usar la instancia de la aplicación Express para que escuche en el puerto '3000'
app.listen(3000);

// Hacer Log del status del server a la consola
console.log('Servidor ejecutándose en http://localhost:3000/');

// Usar la prpiedad module.exports para exponer nuestra instancia de la aplicación Express para uso externo
module.exports = app;
