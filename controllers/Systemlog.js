'use strict';

var url = require('url');


var Systemlog = require('./SystemlogService');


module.exports.systemlogGET = function systemlogGET (req, res, next) {
  Systemlog.systemlogGET(req.swagger.params, res, next);
};

module.exports.systemlogIdDELETE = function systemlogIdDELETE (req, res, next) {
  Systemlog.systemlogIdDELETE(req.swagger.params, res, next);
};

module.exports.systemlogIdGET = function systemlogIdGET (req, res, next) {
  Systemlog.systemlogIdGET(req.swagger.params, res, next);
};

module.exports.systemlogIdPATCH = function systemlogIdPATCH (req, res, next) {
  Systemlog.systemlogIdPATCH(req.swagger.params, res, next);
};

module.exports.systemlogIdPUT = function systemlogIdPUT (req, res, next) {
  Systemlog.systemlogIdPUT(req.swagger.params, res, next);
};

module.exports.systemlogPOST = function systemlogPOST (req, res, next) {
  Systemlog.systemlogPOST(req.swagger.params, res, next);
};
