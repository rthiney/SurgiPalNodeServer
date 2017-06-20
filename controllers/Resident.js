'use strict';

var url = require('url');


var Resident = require('./ResidentService');


module.exports.residentGET = function residentGET (req, res, next) {
  Resident.residentGET(req.swagger.params, res, next);
};

module.exports.residentIdDELETE = function residentIdDELETE (req, res, next) {
  Resident.residentIdDELETE(req.swagger.params, res, next);
};

module.exports.residentIdGET = function residentIdGET (req, res, next) {
  Resident.residentIdGET(req.swagger.params, res, next);
};

module.exports.residentIdPATCH = function residentIdPATCH (req, res, next) {
  Resident.residentIdPATCH(req.swagger.params, res, next);
};

module.exports.residentIdPUT = function residentIdPUT (req, res, next) {
  Resident.residentIdPUT(req.swagger.params, res, next);
};

module.exports.residentPOST = function residentPOST (req, res, next) {
  Resident.residentPOST(req.swagger.params, res, next);
};
