var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let sess = req.session;
  console.log(sess.id);
  res.render('index');
});
module.exports = router;
