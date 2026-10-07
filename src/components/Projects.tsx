// src/components/Projects.tsx
import React from 'react';
import { ExternalLink } from 'lucide-react';
import "tailwindcss";

// Interface TypeScript para la estructura de un proyecto
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

// Componente SVG nativo para el icono de GitHub (Evita errores de exportación en lucide-react)
const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

// Datos de ejemplo para los proyectos del portafolio
const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Plataforma Artística Interactive',
    description: 'Galería digital interactiva con enfoque en efectos visuales sutiles, filtros por estilo y rendimiento nativo.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '2',
    title: 'Dashboard Minimalista',
    description: 'Panel de control optimizado en modo claro/oscuro con métricas en tiempo real e interfaz altamente responsiva.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['TypeScript', 'Tailwind CSS', 'Recharts'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '3',
    title: 'Portfolio Creativo SPA',
    description: 'Sitio estático responsivo integrado con EmailJS y despliegue automatizado mediante integración continua.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'EmailJS', 'Netlify'],
    demoUrl: '#',
    githubUrl: '#',
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado de la sección */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-indigo-500 font-semibold bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/50">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4 tracking-tight">
            Proyectos Destacados
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">
            Una muestra de mis trabajos más recientes construidos con estándares de código alto y enfoque UX.
          </p>
        </div>

        {/* Rejilla de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Imagen del proyecto */}
              <div className="relative overflow-hidden aspect-video bg-slate-200 dark:bg-slate-700">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-300" />
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Etiquetas de tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-100 dark:border-indigo-800/50 px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Enlaces de Demo y GitHub */}
                <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-700/40">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1.5" /> Demo En Vivo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 mr-1.5" /> Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;