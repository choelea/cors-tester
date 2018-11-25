var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(req.session.viewhistories);
});
router.put('/', function(req, res, next) {
  if(req.session.viewhistories){
    req.session.viewhistories.push(req.query.viewUrl)
  }else{
    req.session.viewhistories = [req.query.viewUrl];
  }
  res.json('ok');
});

module.exports = router;
