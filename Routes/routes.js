const express = require('express');
const route = express.Router();

const register = require('../Control/register')
const loging = require('../Control/login')
const customer = require('../Control/customer')
const booking = require('../Control/booking')


route.post('/booking',booking);
route.post('/login',loging);
route.post('/register',register);
route.post('/customer',customer);

module.exports = route;