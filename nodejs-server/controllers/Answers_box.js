'use strict';

var url = require('url');


var Answers_box = require('./Answers_boxService');


module.exports.answers_boxGET = function answers_boxGET (req, res, next) {
  Answers_box.answers_boxGET(req.swagger.params, res, next);
};

module.exports.answers_boxIdDELETE = function answers_boxIdDELETE (req, res, next) {
  Answers_box.answers_boxIdDELETE(req.swagger.params, res, next);
};

module.exports.answers_boxIdGET = function answers_boxIdGET (req, res, next) {
  Answers_box.answers_boxIdGET(req.swagger.params, res, next);
};

module.exports.answers_boxIdPATCH = function answers_boxIdPATCH (req, res, next) {
  Answers_box.answers_boxIdPATCH(req.swagger.params, res, next);
};

module.exports.answers_boxIdPUT = function answers_boxIdPUT (req, res, next) {
  Answers_box.answers_boxIdPUT(req.swagger.params, res, next);
};

module.exports.answers_boxPOST = function answers_boxPOST (req, res, next) {
  Answers_box.answers_boxPOST(req.swagger.params, res, next);
};
