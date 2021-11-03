const express = require('express');
const { crossOriginResourcePolicy } = require('helmet');
const router = express.Router();
const authRequest = require('../models/requestAuth_model');

//adds new user request to the user table
//when "user request" is stored, only email and ip data is stored
//by updating the user row with password, the user can login to the bootcamp frontend app
router.post('/',
  function (request, response) {
    authRequest.add(request.body, function (err, dbResult) {
      if (err) {
        response.json({"error":"Error happened."});
      } else {
        response.json(request.body);
      }
    });
  });

module.exports = router;
