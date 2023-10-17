// bcrypt encrypts passwords into hashpasswords
const bcrypt = require('bcrypt');
const pool = require('../db/hotelDB');

const booking =  async(req,res) =>{
    const {userid,checkIn,checkOut} = req.body;
    
        const insertQuery = `
        INSERT INTO bookings(userid,checkIn,checkOut)
        VALUES($1, $2, $3); ` 
        try {
            await pool.query(insertQuery,[userid, checkIn, checkOut]);
            req.flash('message','successfully booked room ')
            console.log(`successfully booked room`);
           } catch (error) {
            req.flash({ message: `Failed to book a room`});
            console.log(`Failed to book a room`);
            }
        }
module.exports = booking;