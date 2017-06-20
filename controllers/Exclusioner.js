'use strict';

var url = require('url');


var Exclusioner = require('./ExclusionerService');


module.exports.exclusionerGET = function exclusionerGET (req, res, next) {
  Exclusioner.exclusionerGET(req.swagger.params, res, next);
};

module.exports.exclusionerIdDELETE = function exclusionerIdDELETE (req, res, next) {
  Exclusioner.exclusionerIdDELETE(req.swagger.params, res, next);
};

module.exports.exclusionerIdGET = function exclusionerIdGET (req, res, next) {
  Exclusioner.exclusionerIdGET(req.swagger.params, res, next);
};

module.exports.exclusionerIdPATCH = function exclusionerIdPATCH (req, res, next) {
  Exclusioner.exclusionerIdPATCH(req.swagger.params, res, next);
};

module.exports.exclusionerIdPUT = function exclusionerIdPUT (req, res, next) {
  Exclusioner.exclusionerIdPUT(req.swagger.params, res, next);
};

module.exports.exclusionerPOST = function exclusionerPOST (req, res, next) {
  Exclusioner.exclusionerPOST(req.swagger.params, res, next);
};
