'use strict';

var url = require('url');


var Practice = require('./PracticeService');


module.exports.practiceGET = function practiceGET (req, res, next) {
  Practice.practiceGET(req.swagger.params, res, next);
};

module.exports.practiceIdDELETE = function practiceIdDELETE (req, res, next) {
  Practice.practiceIdDELETE(req.swagger.params, res, next);
};

module.exports.practiceIdGET = function practiceIdGET (req, res, next) {
  Practice.practiceIdGET(req.swagger.params, res, next);
};

module.exports.practiceIdPATCH = function practiceIdPATCH (req, res, next) {
  Practice.practiceIdPATCH(req.swagger.params, res, next);
};

module.exports.practiceIdPUT = function practiceIdPUT (req, res, next) {
  Practice.practiceIdPUT(req.swagger.params, res, next);
};

module.exports.practicePOST = function practicePOST (req, res, next) {
  Practice.practicePOST(req.swagger.params, res, next);
};
