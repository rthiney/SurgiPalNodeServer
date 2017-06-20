'use strict';

var url = require('url');


var Group = require('./GroupService');


module.exports.groupGET = function groupGET (req, res, next) {
  Group.groupGET(req.swagger.params, res, next);
};

module.exports.groupIdDELETE = function groupIdDELETE (req, res, next) {
  Group.groupIdDELETE(req.swagger.params, res, next);
};

module.exports.groupIdGET = function groupIdGET (req, res, next) {
  Group.groupIdGET(req.swagger.params, res, next);
};

module.exports.groupIdPATCH = function groupIdPATCH (req, res, next) {
  Group.groupIdPATCH(req.swagger.params, res, next);
};

module.exports.groupIdPUT = function groupIdPUT (req, res, next) {
  Group.groupIdPUT(req.swagger.params, res, next);
};

module.exports.groupPOST = function groupPOST (req, res, next) {
  Group.groupPOST(req.swagger.params, res, next);
};
