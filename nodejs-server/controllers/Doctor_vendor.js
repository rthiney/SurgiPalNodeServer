'use strict';

var url = require('url');


var Doctor_vendor = require('./Doctor_vendorService');


module.exports.doctor_vendorGET = function doctor_vendorGET (req, res, next) {
  Doctor_vendor.doctor_vendorGET(req.swagger.params, res, next);
};

module.exports.doctor_vendorIdDELETE = function doctor_vendorIdDELETE (req, res, next) {
  Doctor_vendor.doctor_vendorIdDELETE(req.swagger.params, res, next);
};

module.exports.doctor_vendorIdGET = function doctor_vendorIdGET (req, res, next) {
  Doctor_vendor.doctor_vendorIdGET(req.swagger.params, res, next);
};

module.exports.doctor_vendorIdPATCH = function doctor_vendorIdPATCH (req, res, next) {
  Doctor_vendor.doctor_vendorIdPATCH(req.swagger.params, res, next);
};

module.exports.doctor_vendorIdPUT = function doctor_vendorIdPUT (req, res, next) {
  Doctor_vendor.doctor_vendorIdPUT(req.swagger.params, res, next);
};

module.exports.doctor_vendorPOST = function doctor_vendorPOST (req, res, next) {
  Doctor_vendor.doctor_vendorPOST(req.swagger.params, res, next);
};
