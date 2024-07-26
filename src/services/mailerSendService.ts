// services/mailerSendService.ts

import { EmailParamsType } from "@/types/mailerSendtypes";
import { EmailParams, MailerSend, Recipient, Sender } from "mailersend";


const mailerSend = new MailerSend({
  apiKey: process.env.NEXT_PUBLIC_MAILERSEND_API_KEY as string,
});

export const sendEmail = async ({ to, from, subject, htmlContent }: EmailParamsType): Promise<any> => {
  const sentFrom = new Sender(from.email, from.name);
  console.log({ sentFrom })
  const recipients = [
    new Recipient(to, "")
  ];
  console.log(recipients)
  // return true

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject(subject)
    .setHtml(htmlContent)

  try {
    const response = await mailerSend.email.send(emailParams);
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};