import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bagrigaurav46@gmail.com',
    pass: 'rnbr kvwt ushx ktde',
},
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body;

    const mailOptions = {
      from: 'bagrigaurav46@gmail.com',
      to: 'bagrigaurav46@gmail.com',
      subject: `Query from GKB solutions ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}`,        
    };

    const info = await transporter.sendMail(mailOptions);

    return Response.json({ success: true, data: info });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
