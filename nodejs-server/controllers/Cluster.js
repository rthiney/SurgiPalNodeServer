'use strict';

var url = require('url');


var Cluster = require('./ClusterService');


module.exports.clusterGET = function clusterGET (req, res, next) {
  Cluster.clusterGET(req.swagger.params, res, next);
};

module.exports.clusterIdDELETE = function clusterIdDELETE (req, res, next) {
  Cluster.clusterIdDELETE(req.swagger.params, res, next);
};

module.exports.clusterIdGET = function clusterIdGET (req, res, next) {
  Cluster.clusterIdGET(req.swagger.params, res, next);
};

module.exports.clusterIdPATCH = function clusterIdPATCH (req, res, next) {
  Cluster.clusterIdPATCH(req.swagger.params, res, next);
};

module.exports.clusterIdPUT = function clusterIdPUT (req, res, next) {
  Cluster.clusterIdPUT(req.swagger.params, res, next);
};

module.exports.clusterPOST = function clusterPOST (req, res, next) {
  Cluster.clusterPOST(req.swagger.params, res, next);
};
