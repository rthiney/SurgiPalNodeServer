'use strict';

exports.messagesviewGET = function(args, res, next) {
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
  "DoctorName" : "aeiou",
  "subject" : "aeiou",
  "created_at" : "aeiou",
  "message" : "aeiou",
  "sender_id" : "",
  "hospital_data_id" : "",
  "user_id" : "",
  "DoctorImage" : "aeiou",
  "viewed" : "",
  "id" : "",
  "HospitalName" : "aeiou",
  "doctor_data_id" : "",
  "HospitalEmail" : "aeiou",
  "email" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.messagesviewIdDELETE = function(args, res, next) {
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

exports.messagesviewIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "DoctorName" : "aeiou",
  "subject" : "aeiou",
  "created_at" : "aeiou",
  "message" : "aeiou",
  "sender_id" : "",
  "hospital_data_id" : "",
  "user_id" : "",
  "DoctorImage" : "aeiou",
  "viewed" : "",
  "id" : "",
  "HospitalName" : "aeiou",
  "doctor_data_id" : "",
  "HospitalEmail" : "aeiou",
  "email" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.messagesviewIdPATCH = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * item (Item_74)
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

exports.messagesviewIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * item (Item_73)
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

exports.messagesviewPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * item (Item_72)
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

