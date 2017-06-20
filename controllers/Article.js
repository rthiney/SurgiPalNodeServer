'use strict';

var url = require('url');


var Article = require('./ArticleService');


module.exports.articleGET = function articleGET (req, res, next) {
  Article.articleGET(req.swagger.params, res, next);
};

module.exports.articleIdDELETE = function articleIdDELETE (req, res, next) {
  Article.articleIdDELETE(req.swagger.params, res, next);
};

module.exports.articleIdGET = function articleIdGET (req, res, next) {
  Article.articleIdGET(req.swagger.params, res, next);
};

module.exports.articleIdPATCH = function articleIdPATCH (req, res, next) {
  Article.articleIdPATCH(req.swagger.params, res, next);
};

module.exports.articleIdPUT = function articleIdPUT (req, res, next) {
  Article.articleIdPUT(req.swagger.params, res, next);
};

module.exports.articlePOST = function articlePOST (req, res, next) {
  Article.articlePOST(req.swagger.params, res, next);
};
