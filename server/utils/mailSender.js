const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        // Mail options
        let mailOptions = {
            from: "StudyNotion || Uzzie Codes",
            to: email,
            subject: title,
            html: body,
        };

        // Send mail and wait for the Promise to resolve
        let info = await transporter.sendMail(mailOptions);

        console.log("Message sent: %s", info.messageId);
        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error; // Re-throw the error to handle it in the calling function
    }
};

module.exports = mailSender;
