'use strict';

var url = require('url');


var Gown_size = require('./Gown_sizeService');


module.exports.gown_sizeGET = function gown_sizeGET (req, res, next) {
  Gown_size.gown_sizeGET(req.swagger.params, res, next);
};

module.exports.gown_sizeIdDELETE = function gown_sizeIdDELETE (req, res, next) {
  Gown_size.gown_sizeIdDELETE(req.swagger.params, res, next);
};

module.exports.gown_sizeIdGET = function gown_sizeIdGET (req, res, next) {
  Gown_size.gown_sizeIdGET(req.swagger.params, res, next);
};

module.exports.gown_sizeIdPATCH = function gown_sizeIdPATCH (req, res, next) {
  Gown_size.gown_sizeIdPATCH(req.swagger.params, res, next);
};

module.exports.gown_sizeIdPUT = function gown_sizeIdPUT (req, res, next) {
  Gown_size.gown_sizeIdPUT(req.swagger.params, res, next);
};

module.exports.gown_sizePOST = function gown_sizePOST (req, res, next) {
  Gown_size.gown_sizePOST(req.swagger.params, res, next);
};
