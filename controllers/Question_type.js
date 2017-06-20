'use strict';

var url = require('url');


var Question_type = require('./Question_typeService');


module.exports.question_typeGET = function question_typeGET (req, res, next) {
  Question_type.question_typeGET(req.swagger.params, res, next);
};

module.exports.question_typeIdDELETE = function question_typeIdDELETE (req, res, next) {
  Question_type.question_typeIdDELETE(req.swagger.params, res, next);
};

module.exports.question_typeIdGET = function question_typeIdGET (req, res, next) {
  Question_type.question_typeIdGET(req.swagger.params, res, next);
};

module.exports.question_typeIdPATCH = function question_typeIdPATCH (req, res, next) {
  Question_type.question_typeIdPATCH(req.swagger.params, res, next);
};

module.exports.question_typeIdPUT = function question_typeIdPUT (req, res, next) {
  Question_type.question_typeIdPUT(req.swagger.params, res, next);
};

module.exports.question_typePOST = function question_typePOST (req, res, next) {
  Question_type.question_typePOST(req.swagger.params, res, next);
};
