// bcrypt encrypts passwords into hashpasswords
const bcrypt = require('bcrypt');
const pool = require('../db/hotelDB');

const booking =  async(req,res) =>{
    const {userid,checkIn,checkOut,room_number} = req.body;
    
        const insertQuery = `
        INSERT INTO bookings(userid,checkIn,checkOut,room_number)
        VALUES($1, $2, $3, $4); ` 
        try {
            await pool.query(insertQuery,[userid, checkIn, checkOut,room_number]);
            req.flash('message','successfully booked room ')
            res.redirect('messageAfterBooking');
           } catch (error) {
            req.flash({ message: `Failed to book a room`});
            
            }
        }
module.exports = booking;