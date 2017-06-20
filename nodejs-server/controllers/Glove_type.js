'use strict';

var url = require('url');


var Glove_type = require('./Glove_typeService');


module.exports.glove_typeGET = function glove_typeGET (req, res, next) {
  Glove_type.glove_typeGET(req.swagger.params, res, next);
};

module.exports.glove_typeIdDELETE = function glove_typeIdDELETE (req, res, next) {
  Glove_type.glove_typeIdDELETE(req.swagger.params, res, next);
};

module.exports.glove_typeIdGET = function glove_typeIdGET (req, res, next) {
  Glove_type.glove_typeIdGET(req.swagger.params, res, next);
};

module.exports.glove_typeIdPATCH = function glove_typeIdPATCH (req, res, next) {
  Glove_type.glove_typeIdPATCH(req.swagger.params, res, next);
};

module.exports.glove_typeIdPUT = function glove_typeIdPUT (req, res, next) {
  Glove_type.glove_typeIdPUT(req.swagger.params, res, next);
};

module.exports.glove_typePOST = function glove_typePOST (req, res, next) {
  Glove_type.glove_typePOST(req.swagger.params, res, next);
};
