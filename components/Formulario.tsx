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
  const [formData1, setFormData1] = useState<FormData>({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });
  const [formData2, setFormData2] = useState<FormData>({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });
  const [status1, setStatus1] = useState<string>('');
  const [status2, setStatus2] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setFormData: React.Dispatch<React.SetStateAction<FormData>>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (
    e: React.FormEvent,
    formData: FormData,
    setFormData: React.Dispatch<React.SetStateAction<FormData>>,
    setStatus: React.Dispatch<React.SetStateAction<string>>
  ) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
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
        console.error('Error al enviar el mensaje:', response.statusText);
      }
    } catch (error) {
      setStatus('Error al enviar el mensaje.');
      console.error('Error al enviar el mensaje:', error);
    }
  };

  const t = useTranslations('');

  return (
    <div className="flex w-11/12 md:w-10/12 items-center justify-center mb-10">
      <div className="flex w-full rounded-lg shadow-lg overflow-hidden">
        {/* Primer Formulario */}
        <div className="w-full md:w-1/2 bg-white px-8 md:px-10 py-20">
          <h2 className="text-3xl font-bold text-center text-gray-700">
            {t('formulario2.title')}
          </h2>
          <p className="mb-4 text-center">{t('formulario2.subtitle')}</p>
          <form
            onSubmit={(e) =>
              handleSubmit(e, formData1, setFormData1, setStatus1)
            }
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('formulario2.name')}
              </label>
              <input
                type="text"
                name="nombre"
                value={formData1.nombre}
                onChange={(e) => handleChange(e, setFormData1)}
                required
                className="mt-1 p-2 border bg-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('formulario2.email')}
              </label>
              <input
                type="email"
                name="correo"
                value={formData1.correo}
                onChange={(e) => handleChange(e, setFormData1)}
                required
                className="mt-1 p-2 border bg-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('formulario2.subject')}
              </label>
              <input
                type="text"
                name="asunto"
                value={formData1.asunto}
                onChange={(e) => handleChange(e, setFormData1)}
                required
                className="mt-1 p-2 border bg-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('formulario2.message')}
              </label>
              <textarea
                name="mensaje"
                value={formData1.mensaje}
                onChange={(e) => handleChange(e, setFormData1)}
                required
                className="mt-1 p-2 border bg-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white p-2 rounded hover:bg-primary/50 transition-all duration-300"
            >
              {t('formulario2.submit')}
            </button>
            {status1 && (
              <p className="text-center text-sm text-gray-700 mt-2">
                {status1}
              </p>
            )}
          </form>
        </div>
        {/* Segundo Formulario */}
        <div className="w-full md:w-1/2 bg-white px-8 md:px-10 py-20">
          <h2 className="text-3xl font-bold text-center text-gray-700">
            {t('formulario.title')}
          </h2>
          <p className="mb-4 text-center">{t('formulario.subtitle')}</p>
          <form
            onSubmit={(e) =>
              handleSubmit(e, formData2, setFormData2, setStatus2)
            }
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('formulario.name')}
              </label>
              <input
                type="text"
                name="nombre"
                value={formData2.nombre}
                onChange={(e) => handleChange(e, setFormData2)}
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
                value={formData2.correo}
                onChange={(e) => handleChange(e, setFormData2)}
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
                value={formData2.asunto}
                onChange={(e) => handleChange(e, setFormData2)}
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
                value={formData2.mensaje}
                onChange={(e) => handleChange(e, setFormData2)}
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
            {status2 && (
              <p className="text-center text-sm text-gray-700 mt-2">
                {status2}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
