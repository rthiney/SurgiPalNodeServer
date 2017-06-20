'use strict';

var url = require('url');


var Doctor_message = require('./Doctor_messageService');


module.exports.doctor_messageGET = function doctor_messageGET (req, res, next) {
  Doctor_message.doctor_messageGET(req.swagger.params, res, next);
};

module.exports.doctor_messageIdDELETE = function doctor_messageIdDELETE (req, res, next) {
  Doctor_message.doctor_messageIdDELETE(req.swagger.params, res, next);
};

module.exports.doctor_messageIdGET = function doctor_messageIdGET (req, res, next) {
  Doctor_message.doctor_messageIdGET(req.swagger.params, res, next);
};

module.exports.doctor_messageIdPATCH = function doctor_messageIdPATCH (req, res, next) {
  Doctor_message.doctor_messageIdPATCH(req.swagger.params, res, next);
};

module.exports.doctor_messageIdPUT = function doctor_messageIdPUT (req, res, next) {
  Doctor_message.doctor_messageIdPUT(req.swagger.params, res, next);
};

module.exports.doctor_messagePOST = function doctor_messagePOST (req, res, next) {
  Doctor_message.doctor_messagePOST(req.swagger.params, res, next);
};
