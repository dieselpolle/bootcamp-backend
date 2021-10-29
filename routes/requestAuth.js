const express = require('express');
const { crossOriginResourcePolicy } = require('helmet');
const router = express.Router();
const authRequest = require('../models/requestAuth_model');

router.post('/',
  function (request, response) {
    authRequest.add(request.getRemoteAddr(), request.body, function (err, dbResult) {
      if (err) {
        response.json({"error":"Error happened."});
      } else {
        response.json(request.body);
      }
    });
  });

module.exports = router;
