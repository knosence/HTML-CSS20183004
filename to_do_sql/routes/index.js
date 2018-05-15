var express = require('express');
var router = express.Router();
const mysql = require("mysql");


const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password:
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
