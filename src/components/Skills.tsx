// src/components/Skills.tsx
import React from 'react';
import "tailwindcss";

interface SkillCategory {
  title: string;
  skills: { name: string; level: string; description?: string }[];
}

const SKILL_DATA: SkillCategory[] = [
  {
    title: 'Desarrollo Frontend',
    skills: [
      { name: 'TypeScript', level: 'Avanzado', description: 'Tipado estricto e interfaces sólidas' },
      { name: 'React', level: 'Avanzado', description: 'Hooks personalizables y rendimiento' },
      { name: 'Tailwind CSS', level: 'Avanzado', description: 'Diseño responsive y sistemas de diseño' },
      { name: 'Next.js', level: 'Intermedio', description: 'SSG, SSR y Server Actions' },
    ],
  },
  {
    title: 'Diseño & UI/UX',
    skills: [
      { name: 'Figma', level: 'Avanzado', description: 'Prototipado e historias de usuario' },
      { name: 'Diseño Artístico', level: 'Avanzado', description: 'Composición de color, tipografía y layouts' },
      { name: 'Sistemas de Diseño', level: 'Intermedio', description: 'Tokens de diseño y componentes reusables' },
    ],
  },
  {
    title: 'Herramientas & Entorno',
    skills: [
      { name: 'Git & GitHub', level: 'Avanzado', description: 'Flujos de trabajo CI/CD y PRs' },
      { name: 'Netlify / Vercel', level: 'Avanzado', description: 'Despliegues automatizados y Serverless' },
      { name: 'Vite', level: 'Avanzado', description: 'Empaquetado rápido e integración' },
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-indigo-500 font-semibold bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/50">
            Competencias
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4">
            Habilidades & Especialidades
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3">
            Una combinación de precisión técnica en frontend y sensibilidad estética en diseño interactivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_DATA.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white pb-3 mb-4 border-b border-slate-100 dark:border-slate-700/50">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium bg-indigo-50 dark:bg-indigo-950/80 px-2 py-0.5 rounded">
                        {skill.level}
                      </span>
                    </div>
                    {skill.description && (
                      <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {skill.description}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};