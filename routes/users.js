var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
const session = require('express-session')
const userData = require('./userData')()

const app = express();

/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/* session set */
app.use(session({
  key: 'sid',
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
      maxAge: 24000 * 60 * 60
  }
}))

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({
    status: 200,
    message: 'success',
    data: {
      userId: 1,
      userName: 'DDookDDak'
    }
  })
});

/* GET users sign in */
router.post('/signIn', function (req, res, next) {
  const { userEmail } = req.body.user.userEmail;
  const { userPassword } = req.body.user.userPassword;

  // 로그인 계정 인덱스 찾기
  const userIndex = userData.findIndex((user) => {
    return user.email === userEmail
  })

  if (userIndex >= 0) {
    req.session = {
      user : userEmail
    }

    responseData = {
      status: 200,
      message: 'signin success',
      data: req.body
    }
  }

  let responseData;

  if (account.userEmail === 'admin') {
    /* 여기서 세션저장 */
    req.session = {
      userId : userId
    }

    responseData = {
      status: 200,
      message: 'success',
      data: req.body
    }
  } else {
    responseData = {
      status: 401,
      message: 'Failed',
    }
  }

  res.json(responseData);
});

module.exports = router;
