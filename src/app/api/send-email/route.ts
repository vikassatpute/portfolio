// app/api/send-email/route.ts

import { sendEmail } from '@/services/mailerSendService';
import { EmailParamsType, Sender } from '@/types/mailerSendtypes';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(request: NextRequest) {
  const { to, from, subject, htmlContent }: EmailParamsType = await request.json();

  // const from: Sender = {
  //   fromData
  // };
  console.log(from)

  const emailParams: EmailParamsType = {
    to,
    from,
    subject,
    htmlContent,
  };

  try {
    const response = await sendEmail(emailParams);
    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
