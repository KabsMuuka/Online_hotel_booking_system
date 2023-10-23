// bcrypt encrypts passwords into hashpasswords
const bcrypt = require('bcrypt');
const pool = require('../db/hotelDB');

const reservations =  async(req,res) =>{
    const {status, booking_id, room_number} = req.body;

    console.log(req.body);
        const insertQuery = `
        INSERT INTO reservations(status, booking_id, room_number)
        VALUES($1, $2, $3); ` 
        try {
            await pool.query(insertQuery,[status, booking_id, room_number]);
            req.flash('message','successfully reserved room');
            res.redirect('admin');
           } catch (error) {
            req.flash('message:', 'Failed to reserve a room');
            res.redirect('admin');
            }
        }
module.exports = reservations;