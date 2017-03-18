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

    // Cargar el modelo 'User'
    //require('../app/models/phoneType.server.model');
    //require('../app/models/customerType.server.model');
    //require('../app/models/addressType.server.model');
    //require('../app/models/twoWayVoicePathType.server.model');
    //require('../app/models/totalConnectAccountType.server.model');
    //require('../app/models/accountType.server.model');
    //require('../app/models/totalConnectAccount.server.model.js');
    //require('../app/models/totalConnectLenguage.server.model.js');
    //require('../app/models/setupType.server.model.js');
    //require('../app/models/supervisionRate.server.model.js');
    //require('../app/models/account.server.model.js');
    //require('../app/models/apiVersion.model.js');
    //
    //   // Cargar el modelo 'Article'
    // require('../app/models/article.server.model');

    // Devolver la instancia de conexión a Mongoose
    return db;
};