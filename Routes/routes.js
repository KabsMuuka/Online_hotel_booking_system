const express = require('express');
const route = express.Router();

const sign_up = require('../Control/sign_up')
const loging = require('../Control/login')
const customer = require('../Control/customer')
const booking = require('../Control/booking')
const reservations = require('../Control/reservations')

route.post('/reservations',reservations);
route.post('/bookaRoom',booking);
route.post('/login',loging);
route.post('/sign_up',sign_up);
route.post('/customer',customer);

module.exports = route;