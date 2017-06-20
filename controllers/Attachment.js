'use strict';

var url = require('url');


var Attachment = require('./AttachmentService');


module.exports.attachmentGET = function attachmentGET (req, res, next) {
  Attachment.attachmentGET(req.swagger.params, res, next);
};

module.exports.attachmentIdDELETE = function attachmentIdDELETE (req, res, next) {
  Attachment.attachmentIdDELETE(req.swagger.params, res, next);
};

module.exports.attachmentIdGET = function attachmentIdGET (req, res, next) {
  Attachment.attachmentIdGET(req.swagger.params, res, next);
};

module.exports.attachmentIdPATCH = function attachmentIdPATCH (req, res, next) {
  Attachment.attachmentIdPATCH(req.swagger.params, res, next);
};

module.exports.attachmentIdPUT = function attachmentIdPUT (req, res, next) {
  Attachment.attachmentIdPUT(req.swagger.params, res, next);
};

module.exports.attachmentPOST = function attachmentPOST (req, res, next) {
  Attachment.attachmentPOST(req.swagger.params, res, next);
};
