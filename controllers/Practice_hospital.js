'use strict';

var url = require('url');


var Practice_hospital = require('./Practice_hospitalService');


module.exports.practice_hospitalGET = function practice_hospitalGET (req, res, next) {
  Practice_hospital.practice_hospitalGET(req.swagger.params, res, next);
};

module.exports.practice_hospitalIdDELETE = function practice_hospitalIdDELETE (req, res, next) {
  Practice_hospital.practice_hospitalIdDELETE(req.swagger.params, res, next);
};

module.exports.practice_hospitalIdGET = function practice_hospitalIdGET (req, res, next) {
  Practice_hospital.practice_hospitalIdGET(req.swagger.params, res, next);
};

module.exports.practice_hospitalIdPATCH = function practice_hospitalIdPATCH (req, res, next) {
  Practice_hospital.practice_hospitalIdPATCH(req.swagger.params, res, next);
};

module.exports.practice_hospitalIdPUT = function practice_hospitalIdPUT (req, res, next) {
  Practice_hospital.practice_hospitalIdPUT(req.swagger.params, res, next);
};

module.exports.practice_hospitalPOST = function practice_hospitalPOST (req, res, next) {
  Practice_hospital.practice_hospitalPOST(req.swagger.params, res, next);
};
