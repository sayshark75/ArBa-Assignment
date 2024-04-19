import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_SERVICE_USER_EMAIL,
    pass: process.env.MAIL_SERVICE_USER_PASSWORD,
  },
});

const mailerService = {
  sendMail: async (email: string, otp: string) => {
    const info = await transporter.sendMail({
      from: `"ArBa-Dev-Studio" <${process.env.MAIL_SERVICE_USER_EMAIL}>`,
      to: `${email}`,
      subject: `ArBa: Password Reset OTP`,
      text: `Your one-time password (OTP) for password reset is: ${otp}`,
      html: "",
    });
    return info;
  },
};

export default mailerService;
