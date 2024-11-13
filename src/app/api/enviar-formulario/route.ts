import { NextRequest, NextResponse } from 'next/server';
import mailgun from 'mailgun-js';

// Inicializa Mailgun con las variables de entorno
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY as string,
  domain: process.env.MAILGUN_DOMAIN as string
});

export async function POST(req: NextRequest) {
  const { nombre, correo, asunto, mensaje } = await req.json();

  const data = {
    from: correo, // Dirección del remitente (correo ingresado en el formulario)
    to: process.env.EMAIL_TO, // Dirección fija de destino
    subject: `${asunto} - ${nombre}`,
    text: `Nombre: ${nombre}\nCorreo: ${correo}\nAsunto: ${asunto}\nMensaje:\n${mensaje}`
  };

  try {
    // Enviar el correo usando Mailgun
    await mg.messages().send(data);
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
