'use strict';

var url = require('url');


var Country = require('./CountryService');


module.exports.countryGET = function countryGET (req, res, next) {
  Country.countryGET(req.swagger.params, res, next);
};

module.exports.countryIdDELETE = function countryIdDELETE (req, res, next) {
  Country.countryIdDELETE(req.swagger.params, res, next);
};

module.exports.countryIdGET = function countryIdGET (req, res, next) {
  Country.countryIdGET(req.swagger.params, res, next);
};

module.exports.countryIdPATCH = function countryIdPATCH (req, res, next) {
  Country.countryIdPATCH(req.swagger.params, res, next);
};

module.exports.countryIdPUT = function countryIdPUT (req, res, next) {
  Country.countryIdPUT(req.swagger.params, res, next);
};

module.exports.countryPOST = function countryPOST (req, res, next) {
  Country.countryPOST(req.swagger.params, res, next);
};
