const express = require('express');
const { crossOriginResourcePolicy } = require('helmet');
const router = express.Router();
const user = require('../models/user_model');

router.get('/:id?',
  function (request, response) {
    if (request.params.id) {
      user.getById(request.params.id, function (err, dbResult) {
        if (err) {
          response.json(err);
        } else {
          response.json(dbResult);
        }
      });
    } else {
      user.getAll(function (err, dbResult) {
        if (err) {
          response.json(err);
        } else {
          response.json(dbResult);
        }
      });
    }
  });


router.post('/',
  function (request, response) {
    user.add(request.body, function (err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(request.body);
      }
    });
  });


router.delete('/:id',
  function (request, response) {
    user.delete(request.params.id, function (err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  });


router.put('/:id',
  function (request, response) {
    user.update(request.params.id, request.body, function (err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  });

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
