'use strict';

var url = require('url');


var Card = require('./CardService');


module.exports.cardGET = function cardGET (req, res, next) {
  Card.cardGET(req.swagger.params, res, next);
};

module.exports.cardIdDELETE = function cardIdDELETE (req, res, next) {
  Card.cardIdDELETE(req.swagger.params, res, next);
};

module.exports.cardIdGET = function cardIdGET (req, res, next) {
  Card.cardIdGET(req.swagger.params, res, next);
};

module.exports.cardIdPATCH = function cardIdPATCH (req, res, next) {
  Card.cardIdPATCH(req.swagger.params, res, next);
};

module.exports.cardIdPUT = function cardIdPUT (req, res, next) {
  Card.cardIdPUT(req.swagger.params, res, next);
};

module.exports.cardPOST = function cardPOST (req, res, next) {
  Card.cardPOST(req.swagger.params, res, next);
};
