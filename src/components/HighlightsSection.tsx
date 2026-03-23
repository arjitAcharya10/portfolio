import React from 'react';

interface HighlightsSectionProps {
  highlights?: string[];
}

const HighlightsSection: React.FC<HighlightsSectionProps> = ({ highlights }) => {
  if (!highlights) {
    return (
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 animate-pulse border-2 border-gray-700">
        <div className="h-6 bg-gray-700 rounded w-40 mb-4" />
        <div className="space-y-3">
          {Array(5).fill(0).map((_, i) => (
            <div key={i} className="h-4 bg-gray-700 rounded w-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-6 border-2 border-cyan-500">
      <ul className="space-y-4">
        {highlights.map((highlight, index) => (
          <li
            key={index}
            className="flex items-start gap-4 p-4 bg-cyan-900/20 rounded-lg border border-cyan-600 hover:border-cyan-500 transition-colors"
          >
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center w-8 h-8 bg-cyan-600 text-white rounded-full font-bold text-sm">
                ✓
              </span>
            </div>
            <span className="text-gray-200 font-medium leading-relaxed">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HighlightsSection;
