/**
 * Created by Jose on 18/03/2017.
 */

// Invocar el modo 'strict' de JavaScript
'use strict';

// Carga las dependencias del módulo
var	config = require('./config'),
    mongoose = require('mongoose');

// Definir el método de configuración de Mongoose
module.exports = function() {
    // Usar Mongoose para conectar a MongoDB
    var db = mongoose.connect(config.db);

    // Cargar el modelo
    require('../app/models/hotel');


    // Devolver la instancia de conexión a Mongoose
    return db;
};