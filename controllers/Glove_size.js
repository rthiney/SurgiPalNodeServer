'use strict';

var url = require('url');


var Glove_size = require('./Glove_sizeService');


module.exports.glove_sizeGET = function glove_sizeGET (req, res, next) {
  Glove_size.glove_sizeGET(req.swagger.params, res, next);
};

module.exports.glove_sizeIdDELETE = function glove_sizeIdDELETE (req, res, next) {
  Glove_size.glove_sizeIdDELETE(req.swagger.params, res, next);
};

module.exports.glove_sizeIdGET = function glove_sizeIdGET (req, res, next) {
  Glove_size.glove_sizeIdGET(req.swagger.params, res, next);
};

module.exports.glove_sizeIdPATCH = function glove_sizeIdPATCH (req, res, next) {
  Glove_size.glove_sizeIdPATCH(req.swagger.params, res, next);
};

module.exports.glove_sizeIdPUT = function glove_sizeIdPUT (req, res, next) {
  Glove_size.glove_sizeIdPUT(req.swagger.params, res, next);
};

module.exports.glove_sizePOST = function glove_sizePOST (req, res, next) {
  Glove_size.glove_sizePOST(req.swagger.params, res, next);
};
