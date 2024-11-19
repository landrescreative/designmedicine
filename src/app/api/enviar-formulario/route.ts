import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configurar el transporte SMTP para Hostinger
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465, // SSL
  secure: true, // true para SSL
  auth: {
    user: process.env.SMTP_USER, // Correo configurado en Hostinger
    pass: process.env.SMTP_PASSWORD // Contraseña del correo
  }
});

export async function POST(req: NextRequest) {
  try {
    const { nombre, correo, asunto, mensaje } = await req.json();

    // Validar los datos del formulario
    if (!nombre || !correo || !asunto || !mensaje) {
      return NextResponse.json(
        { message: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    // Configurar los datos del correo
    const mailOptions = {
      from: `info@designmedicine.org`, // Cambia esto al correo configurado en Hostinger
      to: process.env.EMAIL_TO || 'default@example.com', // Destinatario
      subject: `${asunto} - ${nombre}`, // Asunto del correo
      text: `Nombre: ${nombre}\nCorreo del remitente: ${correo}\nAsunto: ${asunto}\nMensaje:\n${mensaje}` // Cuerpo del mensaje con el correo original
    };

    // Enviar el correo
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado:', info.messageId);

    return NextResponse.json(
      { message: 'Correo enviado con éxito' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error al enviar el correo:', error.message);

    return NextResponse.json(
      { message: 'Error al enviar el correo', error: error.message },
      { status: 500 }
    );
  }
}
