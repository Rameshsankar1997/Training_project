var sendmailer = require('nodemailer');

const user = 'rameshsankar.s@skeintech.com';
const pass = 'yxyuxaxuozyvdboz';

var transport = sendmailer.createTransport({
    service : 'gmail',
    auth : {
        user : user,
        pass : 'yxyuxaxuozyvdboz'
    }
});

// var composemail = {
//     from : 'rameshsankar.s@skeintech.com',
//     to : 'srameshsankar1997@gmail.com',
//     subject : 'Hello Ramesh',
//     html : '<h1> Hello Ramesh sankar</h1>'

// };

// sender.sendMail(composemail,function(error,info){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("Send mail successfully" + info.response);
//     }
// });


module.exports.sendConfirmationEmail = (name, email) => {
    console.log("Check");
    transport.sendMail({
      from: user,
      to: email,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
          <h2>Hello ${name}</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          </div>`,
    }).catch(err => console.log(err));
  };