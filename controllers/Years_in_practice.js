'use strict';

var url = require('url');


var Years_in_practice = require('./Years_in_practiceService');


module.exports.years_in_practiceGET = function years_in_practiceGET (req, res, next) {
  Years_in_practice.years_in_practiceGET(req.swagger.params, res, next);
};

module.exports.years_in_practiceIdDELETE = function years_in_practiceIdDELETE (req, res, next) {
  Years_in_practice.years_in_practiceIdDELETE(req.swagger.params, res, next);
};

module.exports.years_in_practiceIdGET = function years_in_practiceIdGET (req, res, next) {
  Years_in_practice.years_in_practiceIdGET(req.swagger.params, res, next);
};

module.exports.years_in_practiceIdPATCH = function years_in_practiceIdPATCH (req, res, next) {
  Years_in_practice.years_in_practiceIdPATCH(req.swagger.params, res, next);
};

module.exports.years_in_practiceIdPUT = function years_in_practiceIdPUT (req, res, next) {
  Years_in_practice.years_in_practiceIdPUT(req.swagger.params, res, next);
};

module.exports.years_in_practicePOST = function years_in_practicePOST (req, res, next) {
  Years_in_practice.years_in_practicePOST(req.swagger.params, res, next);
};
