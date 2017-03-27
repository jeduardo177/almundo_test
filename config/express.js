/**
 * Created by Jose on 18/03/2017.
 */

// Invocar el modo 'strict' de JavaScript mode
'use strict';

// Cargar las dependencias del módulo
var config = require('./config'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    flash = require('connect-flash'),
    cors = require('cors'),
    passport = require('passport');

// Definir el método de configuración de Express
module.exports = function() {
    // Crear una nueva instancia de la aplicación Express
    var app = express();

    // Usar la variable 'NODE_ENV' para activar los middleware 'morgan' logger o 'compress'
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

//CORS
    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    })

// Configurar el motor view de la aplicación y el directorio 'views'
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    app.use(flash());

    // Cargar los archivos de enrutamiento
    require('../app/routes/hotel-routes.js')(app);

    // Configurar el servidor de archivos estáticos
    app.use(express.static('./public'));

    // Devolver la instancia de la aplicación Express
    return app;
};
