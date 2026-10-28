import React from 'react';
import { Project } from '../types/user';

interface ProjectsSectionProps {
  projects?: Project[];
}


const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  if (!projects) {
    return (
      <div className="animate-pulse rounded-lg border-2 border-gray-700 bg-gray-900 p-6 shadow-lg">
        <div className="mb-4 h-6 w-32 rounded bg-gray-700" />
        <div className="space-y-4">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="h-24 rounded bg-gray-700" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {projects.map((project, index) => (
        <article
          key={`${project.title}-${index}`}
          className="group relative overflow-hidden rounded-xl border border-cyan-700/70 bg-cyan-900/20 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-950/40"
        >
          <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-transform duration-300 group-hover:scale-x-100" />

          <div className="mb-3 flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-300">
                {project.description}
              </p>
            </div>

            <span className="shrink-0 text-2xl text-cyan-400 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>

          {project.technologies && project.technologies.length > 0 && (
            <div className="mt-5 border-t border-cyan-800/70 pt-4">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                Technologies
              </h4>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology, technologyIndex) => (
                  <span
                    key={`${technology}-${technologyIndex}`}
                    className="rounded-md border border-cyan-800 bg-cyan-950/80 px-3 py-1.5 text-xs font-medium text-cyan-200 transition-colors hover:border-cyan-500 hover:bg-cyan-900"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-5 flex items-center gap-2 border-t border-cyan-800/70 pt-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="rounded-full bg-emerald-950/60 px-3 py-1 text-xs font-semibold text-emerald-300">
              Completed
            </span>
          </div>
        </article>
      ))}
    </div>
  );
};


export default ProjectsSection;
