'use strict';

var url = require('url');


var State = require('./StateService');


module.exports.stateGET = function stateGET (req, res, next) {
  State.stateGET(req.swagger.params, res, next);
};

module.exports.stateIdDELETE = function stateIdDELETE (req, res, next) {
  State.stateIdDELETE(req.swagger.params, res, next);
};

module.exports.stateIdGET = function stateIdGET (req, res, next) {
  State.stateIdGET(req.swagger.params, res, next);
};

module.exports.stateIdPATCH = function stateIdPATCH (req, res, next) {
  State.stateIdPATCH(req.swagger.params, res, next);
};

module.exports.stateIdPUT = function stateIdPUT (req, res, next) {
  State.stateIdPUT(req.swagger.params, res, next);
};

module.exports.statePOST = function statePOST (req, res, next) {
  State.statePOST(req.swagger.params, res, next);
};
