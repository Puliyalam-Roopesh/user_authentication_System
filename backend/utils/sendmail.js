const nodemailer = require('nodemailer');

const sendVerificationEmail = async (to, verificationCode) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: 'Verify your Email - Auth System',
        html: `
            <h3>Hello</h3>
            <p>Thank you for signing up.</p>
            <p>Your verification code is:</p>
            <h2>${verificationCode}</h2>
            <p>This code will expire in 10 minutes.</p>
        `,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendVerificationEmail;