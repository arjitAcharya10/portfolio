import React from 'react';
import { Project } from '../types/user';

interface ProjectsSectionProps {
  projects?: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  if (!projects) {
    return (
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 animate-pulse border-2 border-gray-700">
        <div className="h-6 bg-gray-700 rounded w-32 mb-4" />
        <div className="space-y-4">
          {Array(2).fill(0).map((_, i) => (
            <div key={i} className="h-24 bg-gray-700 rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="p-6 bg-cyan-900/20 rounded-lg border-2 border-cyan-600 hover:border-cyan-500 hover:shadow-lg transition-all duration-200 group cursor-pointer"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mt-2">{project.description}</p>
            </div>
            <span className="text-cyan-400 text-2xl opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
              →
            </span>
          </div>
          <div className="flex gap-2 mt-3 pt-3 border-t border-cyan-700">
            <span className="inline-block px-3 py-1 bg-cyan-700 text-cyan-200 rounded text-xs font-semibold">
              Completed
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
