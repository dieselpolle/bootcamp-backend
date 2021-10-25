const express = require('express');
const router = express.Router();
const userRequest = require('../models/userRequest_model');

router.post('/', 
function(request, response) {
  userRequest.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(request.body);
    }
  });
});