'use strict';

exports.surgeryGET = function(args, res, next) {
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
  "admissionStatus" : "aeiou",
  "cpt" : "aeiou",
  "initials" : "aeiou",
  "created_at" : "aeiou",
  "diagnosisCode" : "aeiou",
  "completed" : "",
  "hospital_id" : "",
  "surgeryTime" : "aeiou",
  "answer_box_id" : "",
  "ssn" : "aeiou",
  "doctor_id" : "",
  "surgery_status_id" : "",
  "reschedules" : "aeiou",
  "specialty_id" : "",
  "patient" : "aeiou",
  "cancelled" : "",
  "term" : "aeiou",
  "id" : ""
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.surgeryIdDELETE = function(args, res, next) {
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

exports.surgeryIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "admissionStatus" : "aeiou",
  "cpt" : "aeiou",
  "initials" : "aeiou",
  "created_at" : "aeiou",
  "diagnosisCode" : "aeiou",
  "completed" : "",
  "hospital_id" : "",
  "surgeryTime" : "aeiou",
  "answer_box_id" : "",
  "ssn" : "aeiou",
  "doctor_id" : "",
  "surgery_status_id" : "",
  "reschedules" : "aeiou",
  "specialty_id" : "",
  "patient" : "aeiou",
  "cancelled" : "",
  "term" : "aeiou",
  "id" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.surgeryIdPATCH = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * item (Item_98)
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

exports.surgeryIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * item (Item_97)
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

exports.surgeryPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * item (Item_96)
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

