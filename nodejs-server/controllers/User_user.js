'use strict';

var url = require('url');


var User_user = require('./User_userService');


module.exports.user_userGET = function user_userGET (req, res, next) {
  User_user.user_userGET(req.swagger.params, res, next);
};

module.exports.user_userIdDELETE = function user_userIdDELETE (req, res, next) {
  User_user.user_userIdDELETE(req.swagger.params, res, next);
};

module.exports.user_userIdGET = function user_userIdGET (req, res, next) {
  User_user.user_userIdGET(req.swagger.params, res, next);
};

module.exports.user_userIdPATCH = function user_userIdPATCH (req, res, next) {
  User_user.user_userIdPATCH(req.swagger.params, res, next);
};

module.exports.user_userIdPUT = function user_userIdPUT (req, res, next) {
  User_user.user_userIdPUT(req.swagger.params, res, next);
};

module.exports.user_userPOST = function user_userPOST (req, res, next) {
  User_user.user_userPOST(req.swagger.params, res, next);
};
