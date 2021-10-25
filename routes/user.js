const express = require('express');
const router = express.Router();
const user = require('../models/user_model');

//
// Enabling basic authentication and environment variables
//
const basicAuth = require('express-basic-auth');
app.use(basicAuth( { authorizer: authAPI, authorizeAsync:true, } ))
const dotenv = require('dotenv');
dotenv.config();

//
//username and password are needed when using REST API, uses basic authentication
//
function authAPI(username, password, cb){
    if(username===process.env.auth_user && password ===process.env.auth_pass){
        return cb(null, true);
    }
    else{
        return cb(null, false);
    }
}

router.get('/:id?',
 function(request, response) {
  if (request.params.id) {
    user.getById(request.params.id, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  } else {
    user.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  }
});


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


router.delete('/:id', 
function(request, response) {
  user.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});


router.put('/:id', 
function(request, response) {
  user.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;
