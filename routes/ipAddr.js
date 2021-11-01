const express = require('express');
const { crossOriginResourcePolicy } = require('helmet');
const router = express.Router();
const ipaddr = require('../models/ipAddr_model');

//use API authorization
const basicAuth = require('express-basic-auth');
const authUser = require('../authUser');
router.use(basicAuth( { authorizer: authUser, authorizeAsync:true, } ));

router.get('/:ip?',
  function (request, response) {
    if (request.params.ip) {
        ipaddr.getByIp(request.params.ip, function (err, dbResult) {
        if (err) {
          response.json({"error":"Error happened."});
        } else {
          response.json(dbResult);
        }
      });
    } else {
        ipaddr.getAll(function (err, dbResult) {
        if (err) {
          response.json({"error":"Error happened."});
        } else {
          response.json(dbResult);
        }
      });
    }
  });


router.post('/',
  function (request, response) {
    ipaddr.add(request.body, function (err, dbResult) {
      if (err) {
        response.json({"error":"Error happened."});
      } else {
        response.json(request.body);
      }
    });
  });

module.exports = router;
