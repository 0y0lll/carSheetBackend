var express = require('express');
var router = express.Router();
const data = require('./data')()

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('server index : http://localhost:3001/api');
    res.send({ title: 'hello react!'});
});

/* GET car list. */
router.get('/cars', function (req, res, next) {
  const { session } = req;
  console.log('session: ', session);
    // res.send({ title: 'hello react!', cars:data});
    res.send({ cars : data });
});

module.exports = router;
