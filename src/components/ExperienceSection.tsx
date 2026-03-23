import React, { useState } from 'react';
import { Experience } from '../types/user';
import { FiBriefcase, FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface ExperienceSectionProps {
  experiences?: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (!experiences) {
    return (
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 animate-pulse border-2 border-gray-700">
        <div className="h-6 bg-gray-700 rounded w-40 mb-4" />
        <div className="space-y-4">
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="h-32 bg-gray-700 rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg border-2 transition-all duration-200 group cursor-pointer bg-cyan-900/20 border-cyan-600 hover:border-cyan-500`}
          onClick={() => toggleExpand(index)}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <FiBriefcase className="text-cyan-400" />
                <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                  {exp.title}
                </h3>
              </div>
              <p className="text-cyan-300 font-semibold text-sm">{exp.organization}</p>
              <p className="text-gray-400 text-xs mt-1">{exp.period}</p>
            </div>
            <button className="flex-shrink-0 p-2 rounded-lg transition-colors hover:bg-cyan-800">
              {expandedIndex === index ? (
                <FiChevronUp className="text-xl text-cyan-400" />
              ) : (
                <FiChevronDown className="text-xl text-cyan-400" />
              )}
            </button>
          </div>

          {/* Brief View */}
          <p className="text-gray-200 text-sm leading-relaxed mb-3 pl-6">
            {exp.description}
          </p>

          {/* Expanded View */}
          {expandedIndex === index && (
            <div className="pl-6 pt-4 border-t border-cyan-700 animate-in fade-in">
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold mb-2 uppercase text-cyan-300">
                    ✓ Key Skills & Competencies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 rounded-full text-xs font-medium border transition-colors bg-cyan-700 text-cyan-200 border-cyan-600 hover:border-cyan-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Additional Details based on experience type */}
                {index === 0 && (
                  <div>
                    <p className="text-xs font-semibold mb-2 uppercase text-cyan-300">
                       Training Topics
                    </p>
                    <ul className="space-y-1 text-gray-200 text-sm">
                      <li>✓ Java & Spring Boot fundamentals</li>
                      <li>✓ REST API basics </li>
                    </ul>
                  </div>
                )}

                {index === 1 && (
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold mb-2 uppercase text-cyan-300">
                         Architecture & Design
                      </p>
                      <ul className="space-y-1 text-gray-200 text-sm">
                        <li>✓ Scalable microservices architecture design</li>
                        <li>✓ Enterprise-grade security protocols (JWT/OAuth2)</li>
                        <li>✓ Database architecture optimization</li>
                        <li>✓ SOLID principles & design patterns</li>
                        <li>✓ Performance optimization strategies</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold mb-2 uppercase text-cyan-300">
                         Technical Expertise
                      </p>
                      <ul className="space-y-1 text-gray-200 text-sm">
                        <li>✓ Spring Boot & Spring Data JPA mastery</li>
                        <li>✓ Advanced REST API documentation (Swagger/OpenAPI)</li>
                        <li>✓ Redis caching & performance optimization</li>
                        <li>✓ Full-stack development (Backend + Angular)</li>

                        <li>✓ MySQL database design & optimization</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold mb-2 uppercase text-cyan-300">
                         Major Accomplishments
                      </p>
                      <ul className="space-y-1 text-gray-200 text-sm">
                        <li>✓ Futsal Booking System - Tournament management platform with slot booking, JWT auth, Redis caching</li>
                        <li>✓ Student Management System - Advanced CRUD with pagination, filtering, full-text search</li>
                        <li>✓ Production-grade code deployment across microservices</li>
                        <li>✓ Mentored junior team members on best practices</li>
                        <li>✓ 100% uptime on critical APIs in production</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold mb-2 uppercase text-cyan-300">
                        🛠️ Development Methodologies
                      </p>
                      <ul className="space-y-1 text-gray-200 text-sm">
                        <li>✓ Agile development & sprint planning</li>
                        <li>✓ Code reviews & peer programming</li>
                        <li>✓ Test-driven development (TDD)</li>
                        <li>✓ Clean code principles & documentation</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
