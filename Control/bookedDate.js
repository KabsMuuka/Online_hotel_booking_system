const pool = require('../db/hotelDB');

const bookedDate = async (req,res) => {
    try {
        const bookedDates = await pool.query(`SELECT booking_id, room_number, checkIn, checkOut FROM bookings`);
        res.render('reserve', {bookedDates : bookedDates.rows});
    } catch (error) {
        console.log(error);
    }
}
module.exports = bookedDate;

