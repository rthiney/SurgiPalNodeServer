'use strict';

var url = require('url');


var Vendor_data = require('./Vendor_dataService');


module.exports.vendor_dataGET = function vendor_dataGET (req, res, next) {
  Vendor_data.vendor_dataGET(req.swagger.params, res, next);
};

module.exports.vendor_dataIdDELETE = function vendor_dataIdDELETE (req, res, next) {
  Vendor_data.vendor_dataIdDELETE(req.swagger.params, res, next);
};

module.exports.vendor_dataIdGET = function vendor_dataIdGET (req, res, next) {
  Vendor_data.vendor_dataIdGET(req.swagger.params, res, next);
};

module.exports.vendor_dataIdPATCH = function vendor_dataIdPATCH (req, res, next) {
  Vendor_data.vendor_dataIdPATCH(req.swagger.params, res, next);
};

module.exports.vendor_dataIdPUT = function vendor_dataIdPUT (req, res, next) {
  Vendor_data.vendor_dataIdPUT(req.swagger.params, res, next);
};

module.exports.vendor_dataPOST = function vendor_dataPOST (req, res, next) {
  Vendor_data.vendor_dataPOST(req.swagger.params, res, next);
};
