var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('Request For Users Is Excuted..................')
  res.json([{'name':'Joe'},{'name':'Mark'}]);
});

module.exports = router;
