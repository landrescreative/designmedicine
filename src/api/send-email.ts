import { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    try {
      await sendgrid.send({
        to: 'tu-correo-destino@correo.com', // Cambia esto a la dirección a la que quieres enviar los correos
        from: 'tu-correo-verificado@correo.com', // Cambia esto por tu correo verificado en SendGrid
        subject: `${subject}`,
        text: message,
        html: `
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      });

      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
