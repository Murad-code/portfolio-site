const nodemailer = require("nodemailer");
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const message = {
    from: process.env.GMAIL_EMAIL_ADDRESS,
    to: process.env.GMAIL_EMAIL_ADDRESS,
    subject: req.body.subject,
    text: req.body.message + req.body.email,
    html: `<p>${req.body.message}</p> <br /> <p>Sender's email: ${req.body.email}`,
  };

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  if (req.method === "POST") {
    transporter.sendMail(message, (err: any, info: any) => {
      if (err) {
        res.status(400).json({
          error: `Connection refused at ${err.address}`,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
