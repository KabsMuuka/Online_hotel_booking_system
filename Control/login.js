// bcrypt encrypts passwords into hashpasswords
const bcrypt = require('bcrypt');
const pool = require('../db/hotelDB');

const loging = async(req,res) =>{
    const {email,password} = req.body;
    //ENUM admin and customer
    const userResults = await pool.query(`SELECT userid, email, password FROM register WHERE email=$1`,[email]);
    if(userResults.rows.length === 0){
       req.flash('message','No user with that email exists');
       res.redirect('/login');
       return // to avoid further code execution 
    }
    try {
    const user = userResults.rows[0];

    //console.log(user.userid);

    const passwordMatch = await bcrypt.compare(password,user.password);
    if(passwordMatch){
        req.flash('userid',`${user.userid}`);
        res.redirect('/index');
       
    }else if(user.email === 'kabwalimuuka@gmail.com' && user.password === 'password') {  
        res.redirect('/admin');    
    }else{
        req.flash('message', 'Incorrect password');
        res.redirect('/login');
    }  
    } catch (error) {
        req.flash('message', 'Incorrect password');
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  
}
module.exports = loging;