'use strict';

var url = require('url');


var Specialty = require('./SpecialtyService');


module.exports.specialtyGET = function specialtyGET (req, res, next) {
  Specialty.specialtyGET(req.swagger.params, res, next);
};

module.exports.specialtyIdDELETE = function specialtyIdDELETE (req, res, next) {
  Specialty.specialtyIdDELETE(req.swagger.params, res, next);
};

module.exports.specialtyIdGET = function specialtyIdGET (req, res, next) {
  Specialty.specialtyIdGET(req.swagger.params, res, next);
};

module.exports.specialtyIdPATCH = function specialtyIdPATCH (req, res, next) {
  Specialty.specialtyIdPATCH(req.swagger.params, res, next);
};

module.exports.specialtyIdPUT = function specialtyIdPUT (req, res, next) {
  Specialty.specialtyIdPUT(req.swagger.params, res, next);
};

module.exports.specialtyPOST = function specialtyPOST (req, res, next) {
  Specialty.specialtyPOST(req.swagger.params, res, next);
};
