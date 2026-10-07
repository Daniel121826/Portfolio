// src/App.tsx
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import "tailwindcss";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white font-sans antialiased transition-colors duration-300">
      {/* Navegación Fija */}
      <Navbar />

      {/* Contenido Principal */}
      <main className="relative overflow-hidden">
        {/* Fondo Decorativo General: Pinceladas y Resplandores Artísticos */}
        <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden z-0">
          <div className="w-[1000px] h-[600px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/0 blur-3xl rounded-full transform -translate-y-1/2 dark:from-indigo-600/15 dark:via-purple-600/10" />
        </div>

        {/* Secciones de la Aplicación */}
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Pie de Página Minimalista */}
      <footer className="border-t border-slate-200/80 dark:border-slate-800/80 py-8 bg-white dark:bg-slate-900/90 text-center text-xs text-slate-500 dark:text-slate-400 transition-colors">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Diseñado y Desarrollado con React, TypeScript & Tailwind CSS.</p>
          <div className="flex space-x-6">
            <a
              href="#hero"
              className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              Volver al inicio ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;