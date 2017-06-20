'use strict';

var url = require('url');


var Doctor_data = require('./Doctor_dataService');


module.exports.doctor_dataGET = function doctor_dataGET (req, res, next) {
  Doctor_data.doctor_dataGET(req.swagger.params, res, next);
};

module.exports.doctor_dataIdDELETE = function doctor_dataIdDELETE (req, res, next) {
  Doctor_data.doctor_dataIdDELETE(req.swagger.params, res, next);
};

module.exports.doctor_dataIdGET = function doctor_dataIdGET (req, res, next) {
  Doctor_data.doctor_dataIdGET(req.swagger.params, res, next);
};

module.exports.doctor_dataIdPATCH = function doctor_dataIdPATCH (req, res, next) {
  Doctor_data.doctor_dataIdPATCH(req.swagger.params, res, next);
};

module.exports.doctor_dataIdPUT = function doctor_dataIdPUT (req, res, next) {
  Doctor_data.doctor_dataIdPUT(req.swagger.params, res, next);
};

module.exports.doctor_dataPOST = function doctor_dataPOST (req, res, next) {
  Doctor_data.doctor_dataPOST(req.swagger.params, res, next);
};
