'use strict';

var url = require('url');


var SystemLog = require('./SystemLogService');


module.exports.systemLogGET = function systemLogGET (req, res, next) {
  SystemLog.systemLogGET(req.swagger.params, res, next);
};

module.exports.systemLogIdDELETE = function systemLogIdDELETE (req, res, next) {
  SystemLog.systemLogIdDELETE(req.swagger.params, res, next);
};

module.exports.systemLogIdGET = function systemLogIdGET (req, res, next) {
  SystemLog.systemLogIdGET(req.swagger.params, res, next);
};

module.exports.systemLogIdPATCH = function systemLogIdPATCH (req, res, next) {
  SystemLog.systemLogIdPATCH(req.swagger.params, res, next);
};

module.exports.systemLogIdPUT = function systemLogIdPUT (req, res, next) {
  SystemLog.systemLogIdPUT(req.swagger.params, res, next);
};

module.exports.systemLogPOST = function systemLogPOST (req, res, next) {
  SystemLog.systemLogPOST(req.swagger.params, res, next);
};
