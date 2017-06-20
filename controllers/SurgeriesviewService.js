'use strict';

exports.surgeriesviewGET = function(args, res, next) {
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
  "lastName" : "aeiou",
  "hospitalEmail" : "aeiou",
  "surgeryId" : "",
  "surgerySnapshot" : "",
  "companyName" : "aeiou",
  "created_at" : "aeiou",
  "managerName" : "aeiou",
  "speciality" : "aeiou",
  "managerEmail" : "aeiou",
  "doctorDataId" : "",
  "preferenceCardName" : "aeiou",
  "billingCoordinatorName" : "aeiou",
  "officePhone" : "aeiou",
  "pager" : "aeiou",
  "billingCoordinatorEmail" : "aeiou",
  "reschedules" : "aeiou",
  "hospitalId" : "",
  "patient" : "aeiou",
  "managerPhone" : "aeiou",
  "term" : "aeiou",
  "hospital" : "aeiou",
  "coordinatorName" : "aeiou",
  "admissionStatus" : "aeiou",
  "coordinatorPhone" : "aeiou",
  "initials" : "aeiou",
  "cpt" : "aeiou",
  "diagnosisCode" : "aeiou",
  "completed" : "",
  "surgeryTime" : "aeiou",
  "coordinatorEmail" : "aeiou",
  "card_id" : "",
  "doctorFosId" : "",
  "firstName" : "aeiou",
  "doctorEmail" : "aeiou",
  "billingCoordinatorPhone" : "aeiou",
  "cancelled" : "",
  "doctorImage" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.surgeriesviewIdDELETE = function(args, res, next) {
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

exports.surgeriesviewIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "lastName" : "aeiou",
  "hospitalEmail" : "aeiou",
  "surgeryId" : "",
  "surgerySnapshot" : "",
  "companyName" : "aeiou",
  "created_at" : "aeiou",
  "managerName" : "aeiou",
  "speciality" : "aeiou",
  "managerEmail" : "aeiou",
  "doctorDataId" : "",
  "preferenceCardName" : "aeiou",
  "billingCoordinatorName" : "aeiou",
  "officePhone" : "aeiou",
  "pager" : "aeiou",
  "billingCoordinatorEmail" : "aeiou",
  "reschedules" : "aeiou",
  "hospitalId" : "",
  "patient" : "aeiou",
  "managerPhone" : "aeiou",
  "term" : "aeiou",
  "hospital" : "aeiou",
  "coordinatorName" : "aeiou",
  "admissionStatus" : "aeiou",
  "coordinatorPhone" : "aeiou",
  "initials" : "aeiou",
  "cpt" : "aeiou",
  "diagnosisCode" : "aeiou",
  "completed" : "",
  "surgeryTime" : "aeiou",
  "coordinatorEmail" : "aeiou",
  "card_id" : "",
  "doctorFosId" : "",
  "firstName" : "aeiou",
  "doctorEmail" : "aeiou",
  "billingCoordinatorPhone" : "aeiou",
  "cancelled" : "",
  "doctorImage" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.surgeriesviewIdPATCH = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * item (Item_95)
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

exports.surgeriesviewIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * item (Item_94)
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

exports.surgeriesviewPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * item (Item_93)
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

