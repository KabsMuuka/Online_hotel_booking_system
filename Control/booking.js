// bcrypt encrypts passwords into hashpasswords
const bcrypt = require('bcrypt');
const pool = require('../db/hotelDB');

const booking =  async(req,res) =>{
    const {checkIn, checkOut} = req.body;
   // console.log(req.body)
        const insertQuery = `
        INSERT INTO bookings(checkIn, checkOut)
        VALUES($1, $2); ` 

        const bookedRoom = await pool.query(`SELECT checkIn, checkOut 
        FROM bookings 
        WHERE 
        $2 <= checkOut 
        AND $1 >= checkIn `, 
        [checkIn,checkOut]
        );

          //checking current dates
        const currentDate = new Date();
        const selectedCheckInDate = new Date(checkIn);
        const selectedCheckOutDate = new Date(checkOut);

        try {
            if(bookedRoom.rows.length > 0) { 
                req.flash('message',`Sorry!!, has been booked already between '${checkIn}' To '${checkOut}'`);
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
