'use strict';

var url = require('url');


var System_variable = require('./System_variableService');


module.exports.system_variableGET = function system_variableGET (req, res, next) {
  System_variable.system_variableGET(req.swagger.params, res, next);
};

module.exports.system_variableIdDELETE = function system_variableIdDELETE (req, res, next) {
  System_variable.system_variableIdDELETE(req.swagger.params, res, next);
};

module.exports.system_variableIdGET = function system_variableIdGET (req, res, next) {
  System_variable.system_variableIdGET(req.swagger.params, res, next);
};

module.exports.system_variableIdPATCH = function system_variableIdPATCH (req, res, next) {
  System_variable.system_variableIdPATCH(req.swagger.params, res, next);
};

module.exports.system_variableIdPUT = function system_variableIdPUT (req, res, next) {
  System_variable.system_variableIdPUT(req.swagger.params, res, next);
};

module.exports.system_variablePOST = function system_variablePOST (req, res, next) {
  System_variable.system_variablePOST(req.swagger.params, res, next);
};
