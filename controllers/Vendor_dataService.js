'use strict';

exports.vendor_dataGET = function(args, res, next) {
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
  "address" : "aeiou",
  "suite" : "aeiou",
  "city" : "aeiou",
  "phone" : "aeiou",
  "companyName" : "aeiou",
  "postalCode" : "aeiou",
  "name" : "aeiou",
  "id" : "",
  "state_id" : "",
  "userRole" : "aeiou",
  "stateTyped" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.vendor_dataIdDELETE = function(args, res, next) {
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

exports.vendor_dataIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "address" : "aeiou",
  "suite" : "aeiou",
  "city" : "aeiou",
  "phone" : "aeiou",
  "companyName" : "aeiou",
  "postalCode" : "aeiou",
  "name" : "aeiou",
  "id" : "",
  "state_id" : "",
  "userRole" : "aeiou",
  "stateTyped" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.vendor_dataIdPATCH = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * item (Item_116)
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

exports.vendor_dataIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * item (Item_115)
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

exports.vendor_dataPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * item (Item_114)
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

