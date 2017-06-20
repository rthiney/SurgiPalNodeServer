'use strict';

var url = require('url');


var Fos_user = require('./Fos_userService');


module.exports.fos_userGET = function fos_userGET (req, res, next) {
  Fos_user.fos_userGET(req.swagger.params, res, next);
};

module.exports.fos_userIdDELETE = function fos_userIdDELETE (req, res, next) {
  Fos_user.fos_userIdDELETE(req.swagger.params, res, next);
};

module.exports.fos_userIdGET = function fos_userIdGET (req, res, next) {
  Fos_user.fos_userIdGET(req.swagger.params, res, next);
};

module.exports.fos_userIdPATCH = function fos_userIdPATCH (req, res, next) {
  Fos_user.fos_userIdPATCH(req.swagger.params, res, next);
};

module.exports.fos_userIdPUT = function fos_userIdPUT (req, res, next) {
  Fos_user.fos_userIdPUT(req.swagger.params, res, next);
};

module.exports.fos_userPOST = function fos_userPOST (req, res, next) {
  Fos_user.fos_userPOST(req.swagger.params, res, next);
};
