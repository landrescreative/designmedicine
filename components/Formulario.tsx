'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface FormData {
  nombre: string;
  correo: string;
  asunto: string;
  mensaje: string;
}

type Variant = 'duo' | 'panel';

const EMPTY: FormData = { nombre: '', correo: '', asunto: '', mensaje: '' };

const FIELD =
  'mt-2 w-full border-b bg-transparent py-2 text-sm text-primary placeholder:text-slate-400 focus:border-primary focus:outline-none';

export default function Formulario({ variant = 'duo' }: { variant?: Variant }) {
  const [formData1, setFormData1] = useState<FormData>(EMPTY);
  const [formData2, setFormData2] = useState<FormData>(EMPTY);
  const [status1, setStatus1] = useState<string>('');
  const [status2, setStatus2] = useState<string>('');

  const t = useTranslations('');

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
    setStatus(t('formulario.sending') || 'Enviando...');

    try {
      const response = await fetch('/api/enviar-formulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus(t('formulario.success') || 'Mensaje enviado con éxito.');
        setFormData(EMPTY);
      } else {
        setStatus(t('formulario.error') || 'Error al enviar el mensaje.');
        console.error('Error al enviar el mensaje:', response.statusText);
      }
    } catch (error) {
      setStatus(t('formulario.error') || 'Error al enviar el mensaje.');
      console.error('Error al enviar el mensaje:', error);
    }
  };

  if (variant === 'panel') {
    return (
      <form
        onSubmit={(e) => handleSubmit(e, formData1, setFormData1, setStatus1)}
        className="rounded-tl-[2rem] rounded-br-[2rem] border border-primary/15 bg-white p-7 shadow-[0_18px_50px_-32px_rgba(31,42,46,0.45)] md:p-9"
      >
        <div className="space-y-6">
          <div>
            <label
              htmlFor="contact-name"
              className="text-[10px] uppercase tracking-[0.24em] text-slate-500"
            >
              {t('formulario.name')}
            </label>
            <input
              id="contact-name"
              type="text"
              name="nombre"
              value={formData1.nombre}
              onChange={(e) => handleChange(e, setFormData1)}
              required
              autoComplete="name"
              className={`${FIELD} border-primary/20`}
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="text-[10px] uppercase tracking-[0.24em] text-slate-500"
            >
              {t('formulario.email')}
            </label>
            <input
              id="contact-email"
              type="email"
              name="correo"
              value={formData1.correo}
              onChange={(e) => handleChange(e, setFormData1)}
              required
              autoComplete="email"
              className={`${FIELD} border-primary/20`}
            />
          </div>

          <div>
            <label
              htmlFor="contact-subject"
              className="text-[10px] uppercase tracking-[0.24em] text-slate-500"
            >
              {t('formulario.subject')}
            </label>
            <input
              id="contact-subject"
              type="text"
              name="asunto"
              value={formData1.asunto}
              onChange={(e) => handleChange(e, setFormData1)}
              required
              className={`${FIELD} border-primary/20`}
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="text-[10px] uppercase tracking-[0.24em] text-slate-500"
            >
              {t('formulario.message')}
            </label>
            <textarea
              id="contact-message"
              name="mensaje"
              value={formData1.mensaje}
              onChange={(e) => handleChange(e, setFormData1)}
              required
              rows={5}
              className={`${FIELD} resize-none border-primary/20`}
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 w-full rounded-xl bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          {t('formulario.submit')}
        </button>

        {status1 && (
          <p
            role="status"
            className="mt-4 text-center text-xs leading-relaxed text-slate-600"
          >
            {status1}
          </p>
        )}
      </form>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 mb-10">
      <div className="flex flex-col md:flex-row w-full max-w-6xl rounded-lg shadow-lg overflow-hidden">
        {/* Primer Formulario */}
        <div className="flex-1 bg-white px-6 md:px-8 py-8 md:py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-700">
            {t('formulario2.title')}
          </h2>
          <p className="mb-6 text-center text-gray-500">
            {t('formulario2.subtitle')}
          </p>
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
                className="mt-1 p-2 border bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="mt-1 p-2 border bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="mt-1 p-2 border bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="mt-1 p-2 border bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white p-2 rounded-lg hover:bg-primary/50 transition-all duration-300"
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
        <div className="flex-1 bg-gray-50 px-6 md:px-8 py-8 md:py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-700">
            {t('formulario.title')}
          </h2>
          <p className="mb-6 text-center text-gray-500">
            {t('formulario.subtitle')}
          </p>
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
                className="mt-1 p-2 border bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="mt-1 p-2 border bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="mt-1 p-2 border bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="mt-1 p-2 border bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white p-2 rounded-lg hover:bg-primary/50 transition-all duration-300"
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
