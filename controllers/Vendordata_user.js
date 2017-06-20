'use strict';

var url = require('url');


var Vendordata_user = require('./Vendordata_userService');


module.exports.vendordata_userGET = function vendordata_userGET (req, res, next) {
  Vendordata_user.vendordata_userGET(req.swagger.params, res, next);
};

module.exports.vendordata_userIdDELETE = function vendordata_userIdDELETE (req, res, next) {
  Vendordata_user.vendordata_userIdDELETE(req.swagger.params, res, next);
};

module.exports.vendordata_userIdGET = function vendordata_userIdGET (req, res, next) {
  Vendordata_user.vendordata_userIdGET(req.swagger.params, res, next);
};

module.exports.vendordata_userIdPATCH = function vendordata_userIdPATCH (req, res, next) {
  Vendordata_user.vendordata_userIdPATCH(req.swagger.params, res, next);
};

module.exports.vendordata_userIdPUT = function vendordata_userIdPUT (req, res, next) {
  Vendordata_user.vendordata_userIdPUT(req.swagger.params, res, next);
};

module.exports.vendordata_userPOST = function vendordata_userPOST (req, res, next) {
  Vendordata_user.vendordata_userPOST(req.swagger.params, res, next);
};
