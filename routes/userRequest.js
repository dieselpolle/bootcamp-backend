const express = require('express');
const router = express.Router();
const user = require('../models/userRequest_model');

router.post('/', 
function(request, response) {
  user.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(request.body);
    }
  });
});