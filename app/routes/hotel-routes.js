/**
 * Created by Jose Pereira on 21/03/2017.
 */

// Invocar modo JavaScript 'strict'
'use strict';

// Cargar las dependencias del módulo
 var hotels = require('../../app/controllers/hotel-controller');


// Definir el método routes de module
module.exports = function(app) {
    // Configurar la rutas base a 'articles'
    app.route('/hotels')
       .get(hotels.listHotels)
       .post(hotels.createHotel);
};