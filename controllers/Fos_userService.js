'use strict';

exports.fos_userGET = function(args, res, next) {
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
  "salt" : "aeiou",
  "vendor_data_id" : "",
  "username_canonical" : "aeiou",
  "last_login" : "aeiou",
  "staffOf_id" : "",
  "roles" : "aeiou",
  "confirmation_token" : "aeiou",
  "enabled" : "",
  "email_canonical" : "aeiou",
  "password_requested_at" : "aeiou",
  "credentials_expire_at" : "aeiou",
  "activation_token" : "aeiou",
  "password" : "aeiou",
  "expired" : "",
  "expires_at" : "aeiou",
  "hospital_data_id" : "",
  "credentials_expired" : "",
  "practice_id" : "",
  "id" : "",
  "locked" : "",
  "doctor_data_id" : "",
  "email" : "aeiou",
  "username" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.fos_userIdDELETE = function(args, res, next) {
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

exports.fos_userIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "salt" : "aeiou",
  "vendor_data_id" : "",
  "username_canonical" : "aeiou",
  "last_login" : "aeiou",
  "staffOf_id" : "",
  "roles" : "aeiou",
  "confirmation_token" : "aeiou",
  "enabled" : "",
  "email_canonical" : "aeiou",
  "password_requested_at" : "aeiou",
  "credentials_expire_at" : "aeiou",
  "activation_token" : "aeiou",
  "password" : "aeiou",
  "expired" : "",
  "expires_at" : "aeiou",
  "hospital_data_id" : "",
  "credentials_expired" : "",
  "practice_id" : "",
  "id" : "",
  "locked" : "",
  "doctor_data_id" : "",
  "email" : "aeiou",
  "username" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.fos_userIdPATCH = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * item (Item_50)
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

exports.fos_userIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * item (Item_49)
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

exports.fos_userPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * item (Item_48)
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

