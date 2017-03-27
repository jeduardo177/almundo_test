/**
 * Created by Jose Pereira on 21/03/2017.
 */

// Invocar modo JavaScript 'strict'
'use strict';

// Cargar las dependencias del módulo
var mongoose = require('mongoose'),
    Hotel = mongoose.model('hotel');

// Guardar un hotels en bd
exports.createHotel = function(req, res) {
    // Crear un nuevo objeto Hotels
    console.log("Hotel: ",req.body);
    var hotel = new Hotel(req.body);
    // Salvando un hotel
    hotel.save(function(err) {
        if (err) {
            // Si ocurre algún error enviar el mensaje de error
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Enviar una representación JSON de hotel
            res.json(hotel);
        }
    });
};

//Listar  Hoteles
exports.listHotels = function(req, res) {
    // Usar 'find' para obtener una lista de hoteles
    Hotel.find({}, '-_id -__v', function(err, resp) {
        if (err) {
            // Si un error ocurre enviar un mensaje de error
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(resp);
        }
    });
};

exports.minPriceHotel = function(req, res) {
    Hotel.findOne({}, '-_id -__v', {sort: {price: 1 }}, function(err, resp) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(resp);
        }
    });
};

exports.maxPriceHotel = function(req, res) {
    Hotel.findOne({}, '-_id -__v', {sort: {price: -1 }}, function(err, resp) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(resp);
        }
    });
};

var getErrorMessage = function(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Error de servidor desconocido';
    }
};