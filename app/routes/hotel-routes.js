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



    // Configurar el parámetro middleware 'articleId'
    /*app.param('paisId', servicios.estados);
    app.param('panelId', servicios.panelRevision);
    app.param('panId', servicios.comunicator);
    app.param('RevId', servicios.comunicator);
    app.param('panId', servicios.panelTemplate);
    app.param('RevId', servicios.panelTemplate);
    app.param('ComId', servicios.panelTemplate);
    app.param('Mac', servicios.supervisionType);
    app.param('panelRevisionId', servicios.supervisionType);
    app.param('Mac', servicios.SIMRatePlan);
    app.param('countryCode', servicios.SIMRatePlan);
    app.param('AccountId', servicios.buscarCuentaTotalConnect);*/
    //  app.param('AccountId', servicios.resetearEmailAndPass);
    //  app.param('Email', servicios.resetearEmailAndPass);
};