import React from 'react';
import { FiCode } from 'react-icons/fi';

interface SkillsSectionProps {
  skills?: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  if (!skills) {
    return (
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 animate-pulse border-2 border-gray-700">
        <div className="h-6 bg-gray-700 rounded w-32 mb-4" />
        <div className="flex flex-wrap gap-2">
          {Array(8).fill(0).map((_, i) => (
            <div key={i} className="h-10 bg-gray-700 rounded-full w-24" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-6 border-2 border-cyan-500">
      <div className="flex items-center gap-3 mb-6">
        <FiCode className="text-2xl text-cyan-400" />
        <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-cyan-900/30 text-cyan-300 rounded-full font-medium text-sm border border-cyan-600 hover:border-cyan-400 hover:bg-cyan-800/30 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
