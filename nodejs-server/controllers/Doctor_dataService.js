'use strict';

exports.doctor_dataGET = function(args, res, next) {
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
  "fellowshipTrained" : "",
  "lastName" : "aeiou",
  "notes" : "aeiou",
  "city" : "aeiou",
  "companyName" : "aeiou",
  "postalCode" : "aeiou",
  "stateTyped" : "aeiou",
  "inner_glove_size_id" : "",
  "billingCoordinatorName" : "aeiou",
  "officePhone" : "aeiou",
  "pager" : "aeiou",
  "billingCoordinatorEmail" : "aeiou",
  "id" : "",
  "state_id" : "",
  "coordinatorName" : "aeiou",
  "resident_id" : "",
  "image" : "aeiou",
  "address" : "aeiou",
  "years_in_practice_id" : "",
  "coordinatorPhone" : "aeiou",
  "gown_size_id" : "",
  "coordinatorEmail" : "aeiou",
  "outer_glove_type_id" : "",
  "handedness_id" : "",
  "firstName" : "aeiou",
  "fellowSubspeciality" : "aeiou",
  "suite" : "aeiou",
  "doubleGlove" : "",
  "billingCoordinatorPhone" : "aeiou",
  "specialty_id" : "",
  "fellow" : "",
  "glove_type_id" : "",
  "country_id" : "",
  "outer_glove_size_id" : ""
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.doctor_dataIdDELETE = function(args, res, next) {
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

exports.doctor_dataIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "fellowshipTrained" : "",
  "lastName" : "aeiou",
  "notes" : "aeiou",
  "city" : "aeiou",
  "companyName" : "aeiou",
  "postalCode" : "aeiou",
  "stateTyped" : "aeiou",
  "inner_glove_size_id" : "",
  "billingCoordinatorName" : "aeiou",
  "officePhone" : "aeiou",
  "pager" : "aeiou",
  "billingCoordinatorEmail" : "aeiou",
  "id" : "",
  "state_id" : "",
  "coordinatorName" : "aeiou",
  "resident_id" : "",
  "image" : "aeiou",
  "address" : "aeiou",
  "years_in_practice_id" : "",
  "coordinatorPhone" : "aeiou",
  "gown_size_id" : "",
  "coordinatorEmail" : "aeiou",
  "outer_glove_type_id" : "",
  "handedness_id" : "",
  "firstName" : "aeiou",
  "fellowSubspeciality" : "aeiou",
  "suite" : "aeiou",
  "doubleGlove" : "",
  "billingCoordinatorPhone" : "aeiou",
  "specialty_id" : "",
  "fellow" : "",
  "glove_type_id" : "",
  "country_id" : "",
  "outer_glove_size_id" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.doctor_dataIdPATCH = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * item (Item_38)
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

exports.doctor_dataIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * item (Item_37)
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

exports.doctor_dataPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * item (Item_36)
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

