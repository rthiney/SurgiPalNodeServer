'use strict';

var url = require('url');


var Messagesview = require('./MessagesviewService');


module.exports.messagesviewGET = function messagesviewGET (req, res, next) {
  Messagesview.messagesviewGET(req.swagger.params, res, next);
};

module.exports.messagesviewIdDELETE = function messagesviewIdDELETE (req, res, next) {
  Messagesview.messagesviewIdDELETE(req.swagger.params, res, next);
};

module.exports.messagesviewIdGET = function messagesviewIdGET (req, res, next) {
  Messagesview.messagesviewIdGET(req.swagger.params, res, next);
};

module.exports.messagesviewIdPATCH = function messagesviewIdPATCH (req, res, next) {
  Messagesview.messagesviewIdPATCH(req.swagger.params, res, next);
};

module.exports.messagesviewIdPUT = function messagesviewIdPUT (req, res, next) {
  Messagesview.messagesviewIdPUT(req.swagger.params, res, next);
};

module.exports.messagesviewPOST = function messagesviewPOST (req, res, next) {
  Messagesview.messagesviewPOST(req.swagger.params, res, next);
};
