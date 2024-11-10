import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { nombre, correo, asunto, mensaje } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false, // Cambia a false para puerto 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: correo,
    subject: `Nuevo mensaje de ${nombre}: ${asunto}`,
    text: `Nombre: ${nombre}\nCorreo: ${correo}\nAsunto: ${asunto}\nMensaje:\n${mensaje}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: 'Correo enviado con éxito' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json(
      { message: 'Error al enviar el correo' },
      { status: 500 }
    );
  }
}
