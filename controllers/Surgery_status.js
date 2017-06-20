'use strict';

var url = require('url');


var Surgery_status = require('./Surgery_statusService');


module.exports.surgery_statusGET = function surgery_statusGET (req, res, next) {
  Surgery_status.surgery_statusGET(req.swagger.params, res, next);
};

module.exports.surgery_statusIdDELETE = function surgery_statusIdDELETE (req, res, next) {
  Surgery_status.surgery_statusIdDELETE(req.swagger.params, res, next);
};

module.exports.surgery_statusIdGET = function surgery_statusIdGET (req, res, next) {
  Surgery_status.surgery_statusIdGET(req.swagger.params, res, next);
};

module.exports.surgery_statusIdPATCH = function surgery_statusIdPATCH (req, res, next) {
  Surgery_status.surgery_statusIdPATCH(req.swagger.params, res, next);
};

module.exports.surgery_statusIdPUT = function surgery_statusIdPUT (req, res, next) {
  Surgery_status.surgery_statusIdPUT(req.swagger.params, res, next);
};

module.exports.surgery_statusPOST = function surgery_statusPOST (req, res, next) {
  Surgery_status.surgery_statusPOST(req.swagger.params, res, next);
};
