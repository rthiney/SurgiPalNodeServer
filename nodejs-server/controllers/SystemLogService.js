'use strict';

exports.systemLogGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * exclude (String)
  * include (String)
  * order (String)
  * page (String)
  * transform (Boolean)
  * columns (String)
  * filter[] (List)
  * satisfy (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "description" : "aeiou",
  "created_at" : "aeiou",
  "id" : "",
  "type" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.systemLogIdDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.systemLogIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "description" : "aeiou",
  "created_at" : "aeiou",
  "id" : "",
  "type" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.systemLogIdPATCH = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * item (Item_2)
  **/
    var examples = {};
  examples['application/json'] = "";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.systemLogIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * item (Item_1)
  **/
    var examples = {};
  examples['application/json'] = "";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.systemLogPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * item (Item)
  **/
    var examples = {};
  examples['application/json'] = "";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

