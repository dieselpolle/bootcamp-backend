const db = require('../database');

const ipAddr = {
  getByIp: function (ip, callback) {
    return db.query('select * from ipaddr where ip=?', [ip], callback);
  },
  getAll: function (callback) {
    return db.query('select * from ipaddr', callback);
  },
  add: function (ipAddr, callback) {
    return db.query(
      'insert into ipaddr (query, country, countrycode, region, regionname, city, zip, lat, lon, timezone, isp, org, org2) values (?,?,?,?,?,?,?,?,?,?,?,?,?)',
      [ipAddr.query, ipAddr.country, ipAddr.countrycode, ipAddr.region, ipAddr.regionname, ipAddr.city, ipAddr.zip, ipAddr.lat, ipAddr.lon, ipAddr.timezone, ipAddr.isp, ipAddr.org, ipAddr.org2],
      callback
    );
  },
};
module.exports = ipAddr;