const pool = require('../db/hotelDB');

const bookedDate = async (req,res) => {
    try {
        // const dates = await pool.query(`SELECT room_number, checkin, checkOut
        // FROM bookings
        // WHERE room_number =$1
        // checkin = $2
        // checkOut =$3
        // `)
        const bookedDates = await pool.query(`SELECT room_number, checkin, checkOut FROM bookings`);
        req.flash(`bookedDates ${bookedDates.rows}`)
        res.render('reserve',{bookedDates : bookedDates.rows})
    } catch (error) {
        console.log(error);
    }
}
module.exports = bookedDate;

