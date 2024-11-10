import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { nombre, correo, asunto, mensaje } = req.body;

    // Configuración del transporte de Nodemailer para Gmail
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: true, // true para el puerto 465, falso para otros puertos
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Configuración del correo
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Recibes el correo tú mismo
      replyTo: correo, // Permite responder al remitente
      subject: `Nuevo mensaje de ${nombre}: ${asunto}`,
      text: `Nombre: ${nombre}\nCorreo: ${correo}\nAsunto: ${asunto}\nMensaje:\n${mensaje}`
    };

    try {
      // Envía el correo
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Correo enviado con éxito' });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ message: 'Error al enviar el correo' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
