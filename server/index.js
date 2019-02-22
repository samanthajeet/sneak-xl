const express = require('express');
require('dotenv').config()
const massive = require('massive');
const session = require('express-session')

const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env

const app = express();

app.use(express.json())


app.use(session({
  secret: SECRET,
  resave: false,
  saveUnitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}))

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  console.log('connected to database')
  app.listen(SERVER_PORT, () => console.log(`Bingpot on Port ${SERVER_PORT}`))
})


const shoeCtrl = require('./shoeController');
app.get('/api/user/shoes', shoeCtrl.getUserShoes)


const userCtrl = require('./userController')
app.get(`/api/isLoggedIn`, userCtrl.isLoggedIn);
app.post(`/api/login`, userCtrl.login)
