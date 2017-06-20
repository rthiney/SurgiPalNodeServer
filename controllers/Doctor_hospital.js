'use strict';

var url = require('url');


var Doctor_hospital = require('./Doctor_hospitalService');


module.exports.doctor_hospitalGET = function doctor_hospitalGET (req, res, next) {
  Doctor_hospital.doctor_hospitalGET(req.swagger.params, res, next);
};

module.exports.doctor_hospitalIdDELETE = function doctor_hospitalIdDELETE (req, res, next) {
  Doctor_hospital.doctor_hospitalIdDELETE(req.swagger.params, res, next);
};

module.exports.doctor_hospitalIdGET = function doctor_hospitalIdGET (req, res, next) {
  Doctor_hospital.doctor_hospitalIdGET(req.swagger.params, res, next);
};

module.exports.doctor_hospitalIdPATCH = function doctor_hospitalIdPATCH (req, res, next) {
  Doctor_hospital.doctor_hospitalIdPATCH(req.swagger.params, res, next);
};

module.exports.doctor_hospitalIdPUT = function doctor_hospitalIdPUT (req, res, next) {
  Doctor_hospital.doctor_hospitalIdPUT(req.swagger.params, res, next);
};

module.exports.doctor_hospitalPOST = function doctor_hospitalPOST (req, res, next) {
  Doctor_hospital.doctor_hospitalPOST(req.swagger.params, res, next);
};
