const sendMail = ((req, res) => {
    var email = req.body.email;
    var review = req.body.review;
    var subid = req.body.subid;
    console.log( email);
    console.log( review);
    // async..await is not allowed in global scope, must use a wrapper
        async function main() {
            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            let testAccount = await nodemailer.createTestAccount();
        
        

        
        
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
              service: 'outlook',
              secure: false, // true for 465, false for other ports
              auth: {
                  user: 'nishad.ahamed@outlook.com',
                  pass: 'Basin@123'
              },
            });
        
                  // point to the template folder
                  const handlebarOptions = {
                     viewEngine: {
                       partialsDir: path.resolve("./views/"),
                       defaultLayout: false,
                     },
                     viewPath: path.resolve("./views/"),
                   };
               
                   // use a template file with nodemailer
                   transporter.use("compile", hbs(handlebarOptions));
               
            // send mail with defined transport object
            let info = await transporter.sendMail({
              from: "nishad.ahamed@outlook.com", // sender address
              to: email, // list of receivers
              subject: "Hello ✔", // Subject line
              template: 'email', // the name of the template file i.e email.handlebars
              context:{
                  message: review, // replace {{name}} with Adebola
                  company: "Hilton" ,// replace {{company}} with My Company
                  id : subid
              }
            });
        
            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
          }

          main().catch(console.error);
  

})


module.exports = {
    sendMail }