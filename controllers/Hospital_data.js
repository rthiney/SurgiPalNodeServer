'use strict';

var url = require('url');


var Hospital_data = require('./Hospital_dataService');


module.exports.hospital_dataGET = function hospital_dataGET (req, res, next) {
  Hospital_data.hospital_dataGET(req.swagger.params, res, next);
};

module.exports.hospital_dataIdDELETE = function hospital_dataIdDELETE (req, res, next) {
  Hospital_data.hospital_dataIdDELETE(req.swagger.params, res, next);
};

module.exports.hospital_dataIdGET = function hospital_dataIdGET (req, res, next) {
  Hospital_data.hospital_dataIdGET(req.swagger.params, res, next);
};

module.exports.hospital_dataIdPATCH = function hospital_dataIdPATCH (req, res, next) {
  Hospital_data.hospital_dataIdPATCH(req.swagger.params, res, next);
};

module.exports.hospital_dataIdPUT = function hospital_dataIdPUT (req, res, next) {
  Hospital_data.hospital_dataIdPUT(req.swagger.params, res, next);
};

module.exports.hospital_dataPOST = function hospital_dataPOST (req, res, next) {
  Hospital_data.hospital_dataPOST(req.swagger.params, res, next);
};
