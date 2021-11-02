const express = require('express');
const { crossOriginResourcePolicy } = require('helmet');
const router = express.Router();
const ipaddr = require('../models/ipAddr_model');

//gets all IP address data by given IP address
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
      //gets all data from IP address table
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

//adds new IP address data to the table
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
