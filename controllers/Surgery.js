'use strict';

var url = require('url');


var Surgery = require('./SurgeryService');


module.exports.surgeryGET = function surgeryGET (req, res, next) {
  Surgery.surgeryGET(req.swagger.params, res, next);
};

module.exports.surgeryIdDELETE = function surgeryIdDELETE (req, res, next) {
  Surgery.surgeryIdDELETE(req.swagger.params, res, next);
};

module.exports.surgeryIdGET = function surgeryIdGET (req, res, next) {
  Surgery.surgeryIdGET(req.swagger.params, res, next);
};

module.exports.surgeryIdPATCH = function surgeryIdPATCH (req, res, next) {
  Surgery.surgeryIdPATCH(req.swagger.params, res, next);
};

module.exports.surgeryIdPUT = function surgeryIdPUT (req, res, next) {
  Surgery.surgeryIdPUT(req.swagger.params, res, next);
};

module.exports.surgeryPOST = function surgeryPOST (req, res, next) {
  Surgery.surgeryPOST(req.swagger.params, res, next);
};
