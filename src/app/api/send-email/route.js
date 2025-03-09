import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body;

    const response = await resend.emails.send({
      from: 'gauravbagri646@gmail.com',
      to: 'gauravbagri646@gmail.com',
      subject: `Query from GKB solutions ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}`,
    });

    return Response.json({ success: true, data: response });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
