var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('daffy', (req, res, next)=>{
  res.redirect('http://espn.com')
});

module.exports = router;
