'use strict';

var url = require('url');


var Surgeriesview = require('./SurgeriesviewService');


module.exports.surgeriesviewGET = function surgeriesviewGET (req, res, next) {
  Surgeriesview.surgeriesviewGET(req.swagger.params, res, next);
};

module.exports.surgeriesviewIdDELETE = function surgeriesviewIdDELETE (req, res, next) {
  Surgeriesview.surgeriesviewIdDELETE(req.swagger.params, res, next);
};

module.exports.surgeriesviewIdGET = function surgeriesviewIdGET (req, res, next) {
  Surgeriesview.surgeriesviewIdGET(req.swagger.params, res, next);
};

module.exports.surgeriesviewIdPATCH = function surgeriesviewIdPATCH (req, res, next) {
  Surgeriesview.surgeriesviewIdPATCH(req.swagger.params, res, next);
};

module.exports.surgeriesviewIdPUT = function surgeriesviewIdPUT (req, res, next) {
  Surgeriesview.surgeriesviewIdPUT(req.swagger.params, res, next);
};

module.exports.surgeriesviewPOST = function surgeriesviewPOST (req, res, next) {
  Surgeriesview.surgeriesviewPOST(req.swagger.params, res, next);
};
