'use strict';

var url = require('url');


var Handedness = require('./HandednessService');


module.exports.handednessGET = function handednessGET (req, res, next) {
  Handedness.handednessGET(req.swagger.params, res, next);
};

module.exports.handednessIdDELETE = function handednessIdDELETE (req, res, next) {
  Handedness.handednessIdDELETE(req.swagger.params, res, next);
};

module.exports.handednessIdGET = function handednessIdGET (req, res, next) {
  Handedness.handednessIdGET(req.swagger.params, res, next);
};

module.exports.handednessIdPATCH = function handednessIdPATCH (req, res, next) {
  Handedness.handednessIdPATCH(req.swagger.params, res, next);
};

module.exports.handednessIdPUT = function handednessIdPUT (req, res, next) {
  Handedness.handednessIdPUT(req.swagger.params, res, next);
};

module.exports.handednessPOST = function handednessPOST (req, res, next) {
  Handedness.handednessPOST(req.swagger.params, res, next);
};
