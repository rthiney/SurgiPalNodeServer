'use strict';

var url = require('url');


var Question = require('./QuestionService');


module.exports.questionGET = function questionGET (req, res, next) {
  Question.questionGET(req.swagger.params, res, next);
};

module.exports.questionIdDELETE = function questionIdDELETE (req, res, next) {
  Question.questionIdDELETE(req.swagger.params, res, next);
};

module.exports.questionIdGET = function questionIdGET (req, res, next) {
  Question.questionIdGET(req.swagger.params, res, next);
};

module.exports.questionIdPATCH = function questionIdPATCH (req, res, next) {
  Question.questionIdPATCH(req.swagger.params, res, next);
};

module.exports.questionIdPUT = function questionIdPUT (req, res, next) {
  Question.questionIdPUT(req.swagger.params, res, next);
};

module.exports.questionPOST = function questionPOST (req, res, next) {
  Question.questionPOST(req.swagger.params, res, next);
};
