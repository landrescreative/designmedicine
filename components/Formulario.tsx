'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface FormData {
  nombre: string;
  correo: string;
  asunto: string;
  mensaje: string;
}

export default function Formulario() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });
  const [status, setStatus] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');

    const response = await fetch('/api/enviar-formulario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setStatus('Mensaje enviado con éxito.');
      setFormData({ nombre: '', correo: '', asunto: '', mensaje: '' });
    } else {
      setStatus('Error al enviar el mensaje.');
    }
  };

  const t = useTranslations('');

  return (
    <div className="flex w-10/12 items-center justify-center mb-10">
      <div className="flex w-full rounded-lg shadow-lg overflow-hidden">
        {/* Columna de la Imagen */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center bg-cover bg-secondary">
          <img
            src="/designmedicine.svg"
            alt="Contacto"
            className="object-cover w-3/4"
          />
        </div>

        {/* Columna del Formulario */}
        <div className="w-full md:w-1/2 bg-white px-10 py-20">
          <h2 className="text-3xl font-bold text-center text-gray-700 ">
            {t('formulario.title')}
          </h2>
          <p className="mb-4 text-center">{t('formulario.subtitle')}</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('formulario.name')}
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="mt-1 p-2 border bg-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('formulario.email')}
              </label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
                className="mt-1 p-2 border bg-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('formulario.subject')}
              </label>
              <input
                type="text"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
                className="mt-1 p-2 border bg-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('formulario.message')}
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="mt-1 p-2 border bg-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white p-2 rounded hover:bg-primary/50 transition-all duration-300"
            >
              {t('formulario.submit')}
            </button>
            {status && (
              <p className="text-center text-sm text-gray-700 mt-2">{status}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
