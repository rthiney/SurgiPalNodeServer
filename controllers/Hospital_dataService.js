'use strict';

exports.hospital_dataGET = function(args, res, next) {
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
  "managerPager" : "aeiou",
  "city" : "aeiou",
  "postalCode" : "aeiou",
  "managerName" : "aeiou",
  "stateTyped" : "aeiou",
  "managerEmail" : "aeiou",
  "suite" : "aeiou",
  "pager" : "aeiou",
  "phone" : "aeiou",
  "managerPhone" : "aeiou",
  "name" : "aeiou",
  "id" : "",
  "state_id" : "",
  "userRole" : "aeiou",
  "country_id" : ""
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.hospital_dataIdDELETE = function(args, res, next) {
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

exports.hospital_dataIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "address" : "aeiou",
  "managerPager" : "aeiou",
  "city" : "aeiou",
  "postalCode" : "aeiou",
  "managerName" : "aeiou",
  "stateTyped" : "aeiou",
  "managerEmail" : "aeiou",
  "suite" : "aeiou",
  "pager" : "aeiou",
  "phone" : "aeiou",
  "managerPhone" : "aeiou",
  "name" : "aeiou",
  "id" : "",
  "state_id" : "",
  "userRole" : "aeiou",
  "country_id" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.hospital_dataIdPATCH = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * item (Item_68)
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

exports.hospital_dataIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * item (Item_67)
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

exports.hospital_dataPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * item (Item_66)
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

