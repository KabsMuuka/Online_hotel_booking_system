// bcrypt encrypts passwords into hashpasswords
const bcrypt = require('bcrypt');
const pool = require('../db/hotelDB');

const booking =  async(req,res) =>{
    const {checkIn, checkOut, room_number} = req.body;
   // console.log(req.body)
        const insertQuery = `
        INSERT INTO bookings(checkIn, checkOut, room_number)
        VALUES($1, $2, $3); ` 

        const bookedRoom = await pool.query(`SELECT room_number, checkIn, checkOut 
        FROM bookings 
        WHERE room_number=$1 
        AND $2 <= checkOut 
        AND $3 >= checkIn `, 
        [room_number,checkIn,checkOut]
        );

          //checking current dates
        const currentDate = new Date();
        const selectedCheckInDate = new Date(checkIn);
        const selectedCheckOutDate = new Date(checkOut);

        try {
            if(bookedRoom.rows.length > 0) { 
                req.flash('message',`Sorry!!, Room ${room_number}, has been booked already between '${checkIn}' To '${checkOut}'`);
                res.redirect('rooms');

            }else if( selectedCheckInDate < currentDate || selectedCheckOutDate < currentDate){
                    req.flash("message","Please choose correct dates");
                    res.redirect('rooms');
                
                }else{ 
                    await pool.query(insertQuery,[checkIn, checkOut, room_number]);
                    req.flash("message","You've Successfully Booked room")
                    res.redirect('messageAfterBooking');
                }
            
           } catch (error) {
            req.flash({ message: `Failed to book a room`});
            console.log(error)
            }
         }
module.exports = booking;
