'use strict';

var url = require('url');


var Contact_message = require('./Contact_messageService');


module.exports.contact_messageGET = function contact_messageGET (req, res, next) {
  Contact_message.contact_messageGET(req.swagger.params, res, next);
};

module.exports.contact_messageIdDELETE = function contact_messageIdDELETE (req, res, next) {
  Contact_message.contact_messageIdDELETE(req.swagger.params, res, next);
};

module.exports.contact_messageIdGET = function contact_messageIdGET (req, res, next) {
  Contact_message.contact_messageIdGET(req.swagger.params, res, next);
};

module.exports.contact_messageIdPATCH = function contact_messageIdPATCH (req, res, next) {
  Contact_message.contact_messageIdPATCH(req.swagger.params, res, next);
};

module.exports.contact_messageIdPUT = function contact_messageIdPUT (req, res, next) {
  Contact_message.contact_messageIdPUT(req.swagger.params, res, next);
};

module.exports.contact_messagePOST = function contact_messagePOST (req, res, next) {
  Contact_message.contact_messagePOST(req.swagger.params, res, next);
};
