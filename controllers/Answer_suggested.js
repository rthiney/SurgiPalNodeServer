'use strict';

var url = require('url');


var Answer_suggested = require('./Answer_suggestedService');


module.exports.answer_suggestedGET = function answer_suggestedGET (req, res, next) {
  Answer_suggested.answer_suggestedGET(req.swagger.params, res, next);
};

module.exports.answer_suggestedIdDELETE = function answer_suggestedIdDELETE (req, res, next) {
  Answer_suggested.answer_suggestedIdDELETE(req.swagger.params, res, next);
};

module.exports.answer_suggestedIdGET = function answer_suggestedIdGET (req, res, next) {
  Answer_suggested.answer_suggestedIdGET(req.swagger.params, res, next);
};

module.exports.answer_suggestedIdPATCH = function answer_suggestedIdPATCH (req, res, next) {
  Answer_suggested.answer_suggestedIdPATCH(req.swagger.params, res, next);
};

module.exports.answer_suggestedIdPUT = function answer_suggestedIdPUT (req, res, next) {
  Answer_suggested.answer_suggestedIdPUT(req.swagger.params, res, next);
};

module.exports.answer_suggestedPOST = function answer_suggestedPOST (req, res, next) {
  Answer_suggested.answer_suggestedPOST(req.swagger.params, res, next);
};
