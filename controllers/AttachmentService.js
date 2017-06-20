'use strict';

exports.attachmentGET = function(args, res, next) {
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
  "file" : "aeiou",
  "name" : "aeiou",
  "id" : "",
  "answer_box_id" : ""
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.attachmentIdDELETE = function(args, res, next) {
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

exports.attachmentIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "file" : "aeiou",
  "name" : "aeiou",
  "id" : "",
  "answer_box_id" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.attachmentIdPATCH = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * item (Item_17)
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

exports.attachmentIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * item (Item_16)
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

exports.attachmentPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * item (Item_15)
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

