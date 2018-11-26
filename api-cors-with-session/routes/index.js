var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let sess = req.session;
  console.log(sess.id);
  if (!sess.viewhistories) {
    sess.viewhistories = [];
  }
  res.render('index');
});
module.exports = router;
