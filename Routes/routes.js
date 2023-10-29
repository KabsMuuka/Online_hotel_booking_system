const express = require('express');
const route = express.Router();

const customer = require('../Control/customer')
const bookedDate = require('../Control/bookedDate');
const booking = require('../Control/booking')
const reservations = require('../Control/reservations')
const deletedBookedDate = require('../Control/deletedBookedDate')

route.post('/reservations',reservations);
route.post('/bookaRoom',booking);
route.post('/customer',customer);

route.get('/reserve',bookedDate);

route.delete('/deleteButton/:id',deletedBookedDate);

module.exports = route;