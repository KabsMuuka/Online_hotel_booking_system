const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    p_client_id = process.env.P_CLIENTID,
    s_client_id = process.env.S_CLIENTID,
  'https://developers.google.com/oauthplayground' // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: 'YOUR_REFRESH_TOKEN'
});

const accessToken = oauth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: 'YOUR_EMAIL_ADDRESS',
    clientId: 'P_CLIENTID',
    clientSecret: 'S_CLIENTID',
    refreshToken: 'YOUR_REFRESH_TOKEN',
    accessToken: accessToken
  }
});

const mailOptions = {
  from: 'kipmoore@gmail.com',
  to: 'kabsmuuka@gmail.com',
  subject: 'TESTING ',
  text: 'We just testing!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
