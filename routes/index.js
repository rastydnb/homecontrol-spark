var express = require('express');
var router = express.Router();
var path    = require("path");
var spark = require('../spark');

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/../views/index.html'));
});

router.get('/toggle/:pin', function(req, res, next) {
  spark.toggle[req.params.pin.toLowerCase()]();
  res.json({
    status:spark.status
  });
});

router.get('/relay/status', function(req, res, next) {
  res.json({
    status:spark.status
  });
});
module.exports = router;
