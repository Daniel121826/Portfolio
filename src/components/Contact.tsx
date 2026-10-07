
import "tailwindcss";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('loading');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setStatus('success');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((error) => {
        console.error('Error enviando correo con EmailJS:', error);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-indigo-500 font-semibold bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/50">
            Contacto Directo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4">
            ¿Hablamos?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Envíame un mensaje y te responderé directamente a tu correo.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-white dark:bg-slate-800/90 p-8 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm space-y-5"
        >
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
              Nombre
            </label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Tu nombre o empresa"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="nombre@ejemplo.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
              Mensaje
            </label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Escribe los detalles de tu consulta..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all shadow-md shadow-indigo-500/20 disabled:opacity-50 flex items-center justify-center space-x-2"
          >
            {status === 'loading' ? (
              <span>Enviando mensaje...</span>
            ) : (
              <>
                <span>Enviar Mensaje</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          {status === 'success' && (
            <div className="flex items-center justify-center space-x-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium pt-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>¡Mensaje enviado con éxito a mi cuenta!</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center justify-center space-x-2 text-rose-600 dark:text-rose-400 text-sm font-medium pt-2">
              <AlertCircle className="w-4 h-4" />
              <span>Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};