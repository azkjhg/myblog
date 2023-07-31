import nodemailer from "nodemailer";

export type EmailData = {
  from: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_AUTH_USER,
    pass: process.env.NEXT_PUBLIC_AUTH_PASS,
  },
});

export async function sendEmail({ subject, from, message }: EmailData) {
  const mailData = {
    to: process.env.NEXT_PUBLIC_AUTH_USER,
    subject: `[BLOG] ${subject}`,
    from: from,
    html: `<h1>${subject}</h1>
    <div>${message}</div>
    <p>보낸사람: ${from}</p>`,
  };

  return transporter.sendMail(mailData);
}
