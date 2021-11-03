const express = require('express');
const { crossOriginResourcePolicy } = require('helmet');
const router = express.Router();
const user = require('../models/user_model');

//use API authorization when accessing the user rest api
const basicAuth = require('express-basic-auth');
const authUser = require('../authUser');
router.use(basicAuth( { authorizer: authUser, authorizeAsync:true, } ));

//get user row by row id
router.get('/:id?',
  function (request, response) {
    if (request.params.id) {
      user.getById(request.params.id, function (err, dbResult) {
        if (err) {
          response.json({"error":"Error happened."});
        } else {
          response.json(dbResult);
        }
      });
      //get all user rows
    } else {
      user.getAll(function (err, dbResult) {
        if (err) {
          response.json({"error":"Error happened."});
        } else {
          response.json(dbResult);
        }
      });
    }
  });

//add new user
router.post('/',
  function (request, response) {
    user.add(request.body, function (err, dbResult) {
      if (err) {
        response.json({"error":"Error happened."});
      } else {
        response.json(request.body);
      }
    });
  });

//delete a user
router.delete('/:id',
  function (request, response) {
    user.delete(request.params.id, function (err, dbResult) {
      if (err) {
        response.json({"error":"Error happened."});
      } else {
        response.json(dbResult);
      }
    });
  });

//update a user password
router.put('/newPassword',
  function (request, response) {
    user.update(request.body, function (err, dbResult) {
      if (err) {
        response.json({"error":"Error happened."});
      } else {
        response.json(dbResult);
      }
    });
  });

//authenticates the user by given username and password, if they don't match, FALSE is given. On success, TRUE is given.
router.post('/auth',
  function authenticateUser(request, response) {
    user.authenticateUser(request.body, function (err, dbResult) {
      if (err) {
        response.json(false);
      } else {
            console.log(JSON.stringify(dbResult));
          if (JSON.stringify(dbResult)!=="[]") {  
            response.json(true)
          } else {
            response.json(false);
        }
        ;
      }
    });
  });

module.exports = router;
