import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Partial<ContactPayload>;
    const name = (data.name || '').trim();
    const email = (data.email || '').trim();
    const phone = (data.phone || '').trim();
    const message = (data.message || '').trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;
    const subject = `New Contact Form Submission from ${name}`;
    const textBody = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

    await transporter.sendMail({
      from: `${name} <${process.env.SMTP_USER}>`,
      replyTo: email,
      to,
      subject,
      text: textBody,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact form email error:', err);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
