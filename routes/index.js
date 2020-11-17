var express = require('express');
var router = express.Router();
const data = require('./data')()

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('server index : http://localhost:3001/api');
    res.send({ title: 'hello react!'});
});

/* GET home page. */
router.get('/cars', function(req, res, next) {
    // res.send({ title: 'hello react!', cars:data});
    res.send({ cars : data });
});

module.exports = router;
