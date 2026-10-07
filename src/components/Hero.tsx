// src/components/Hero.tsx
import React from 'react';
import "tailwindcss";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background brush art effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 brush-stroke rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center px-6 z-10">
        <span className="text-xs uppercase tracking-widest text-indigo-500 font-bold bg-indigo-50 dark:bg-indigo-950/50 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
          Diseñador & Desarrollador Web
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mt-6 tracking-tight">
          Creando experiencias digitales <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">artísticas</span> y funcionales.
        </h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Bienvenido a mi espacio digital. Explora los proyectos que he construido y las tecnologías que domino.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition shadow-lg shadow-indigo-500/25"
          >
            Ver Trabajo
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium transition"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
};