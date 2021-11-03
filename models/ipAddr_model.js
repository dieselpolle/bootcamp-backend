const db = require('../database');

const ipAddr = {
  //get the all data from IP address table by given IP address
  getByIp: function (ip, callback) {
    return db.query('select * from ipaddr where query=?', [ip], callback);
  },
  getAll: function (callback) {
    //get all rows from IP Address table
    return db.query('select * from ipaddr', callback);
  },
  add: function (ipAddr, callback) {
    //insert IP address data to the table
    return db.query(
      'insert into ipaddr (query, country, countrycode, region, regionname, city, zip, lat, lon, timezone, isp, org, org2) values (?,?,?,?,?,?,?,?,?,?,?,?,?)',
      [ipAddr.query, ipAddr.country, ipAddr.countrycode, ipAddr.region, ipAddr.regionname, ipAddr.city, ipAddr.zip, ipAddr.lat, ipAddr.lon, ipAddr.timezone, ipAddr.isp, ipAddr.org, ipAddr.as],
      callback
    );
  },
};
module.exports = ipAddr;