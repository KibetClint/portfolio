import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { defineSecret } from "firebase-functions/params";
import * as nodemailer from "nodemailer";

const GMAIL_USER = defineSecret("GMAIL_USER");
const GMAIL_APP_PASSWORD = defineSecret("GMAIL_APP_PASSWORD");
const NOTIFY_EMAIL = defineSecret("NOTIFY_EMAIL");

export const onNewContactMessage = onDocumentCreated(
  {
    document: "contact_messages/{docId}",
    secrets: [GMAIL_USER, GMAIL_APP_PASSWORD, NOTIFY_EMAIL],
  },
  async (event) => {
    const data = event.data?.data();
    if (!data) return;

    const { name, email, message } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER.value(),
        pass: GMAIL_APP_PASSWORD.value(),
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${GMAIL_USER.value()}>`,
      to: NOTIFY_EMAIL.value(),
      replyTo: email,
      subject: `📬 New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
          <h2 style="color:#111">New Portfolio Message</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 0;color:#555;width:80px"><strong>From</strong></td>
              <td style="padding:8px 0">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#555"><strong>Email</strong></td>
              <td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0"/>
          <p style="color:#111;line-height:1.6;white-space:pre-wrap">${message}</p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0"/>
          <p style="color:#9ca3af;font-size:12px">
            Sent via your portfolio contact form · Hit reply to respond directly.
          </p>
        </div>
      `,
    });

    console.log(`Email sent for message from ${name} <${email}>`);
  },
);
