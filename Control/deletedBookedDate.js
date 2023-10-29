const pool = require('../db/hotelDB');

const deletedBookedDates = async (req,res) => {
    try {
        const {id} = req.params;
        const deletedBookedDate = await pool.query(`DELETE FROM bookings WHERE booking_id =$1`,[id]);

        if(deletedBookedDate) {
            res.status(200).json('Successfully Erased a Date');
        }else {
            res.status(401).json('Failed to Erased a Date');
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = deletedBookedDates;

