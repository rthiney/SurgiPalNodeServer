'use strict';

var url = require('url');


var Cluster_card = require('./Cluster_cardService');


module.exports.cluster_cardGET = function cluster_cardGET (req, res, next) {
  Cluster_card.cluster_cardGET(req.swagger.params, res, next);
};

module.exports.cluster_cardIdDELETE = function cluster_cardIdDELETE (req, res, next) {
  Cluster_card.cluster_cardIdDELETE(req.swagger.params, res, next);
};

module.exports.cluster_cardIdGET = function cluster_cardIdGET (req, res, next) {
  Cluster_card.cluster_cardIdGET(req.swagger.params, res, next);
};

module.exports.cluster_cardIdPATCH = function cluster_cardIdPATCH (req, res, next) {
  Cluster_card.cluster_cardIdPATCH(req.swagger.params, res, next);
};

module.exports.cluster_cardIdPUT = function cluster_cardIdPUT (req, res, next) {
  Cluster_card.cluster_cardIdPUT(req.swagger.params, res, next);
};

module.exports.cluster_cardPOST = function cluster_cardPOST (req, res, next) {
  Cluster_card.cluster_cardPOST(req.swagger.params, res, next);
};
