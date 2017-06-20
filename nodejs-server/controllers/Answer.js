'use strict';

var url = require('url');


var Answer = require('./AnswerService');


module.exports.answerGET = function answerGET (req, res, next) {
  Answer.answerGET(req.swagger.params, res, next);
};

module.exports.answerIdDELETE = function answerIdDELETE (req, res, next) {
  Answer.answerIdDELETE(req.swagger.params, res, next);
};

module.exports.answerIdGET = function answerIdGET (req, res, next) {
  Answer.answerIdGET(req.swagger.params, res, next);
};

module.exports.answerIdPATCH = function answerIdPATCH (req, res, next) {
  Answer.answerIdPATCH(req.swagger.params, res, next);
};

module.exports.answerIdPUT = function answerIdPUT (req, res, next) {
  Answer.answerIdPUT(req.swagger.params, res, next);
};

module.exports.answerPOST = function answerPOST (req, res, next) {
  Answer.answerPOST(req.swagger.params, res, next);
};
