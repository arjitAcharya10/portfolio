
import { useState } from "react";
import type { Experience } from "../types/user";
import { FiBriefcase, FiChevronDown } from "react-icons/fi";

interface ExperienceSectionProps {
  experiences?: Experience[];
}

const internshipHighlights = [
  "Learned Java syntax, OOP concepts, exception handling, and collections.",
  "Worked with Spring Boot to develop RESTful APIs.",
  "Learned database integration using MySQL and Spring Data JPA.",
  "Practiced CRUD operations, request validation, and exception handling.",
  "Learned Git for version control and Maven for project dependency management.",
];

const professionalContributions = [
  "Developing backend services and RESTful APIs using Java and Spring Boot.",
  "Implementing authentication and authorization with Spring Security and JWT.",
  "Working with Hibernate, Spring Data JPA, and MySQL.",
  "Documenting APIs using Swagger/OpenAPI.",
  "Integrating backend services with frontend applications using React.",
];

const projectHighlights = [
  {
    title: "Futsal Booking System",
    description: "Booking workflows and tournament management features.",
    accent: "hover:border-cyan-200",
  },
  {
    title: "Student Management System",
    description: "Student records, filtering, search, and pagination.",
    accent: "hover:border-violet-200",
  },
];

const ExperienceSection = ({
  experiences = [],
}: ExperienceSectionProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const uniqueExperiences = [
    ...new Map(
      experiences.map((exp) => [
        `${exp.title?.trim()}-${exp.organization?.trim()}-${exp.period?.trim()}`,
        exp,
      ])
    ).values(),
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex((current) => (current === index ? -1 : index));
  };

  if (uniqueExperiences.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="font-semibold text-slate-800">
          Experience details coming soon
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Check back later for professional experience and project highlights.
        </p>
      </div>
    );
  }

  return (
    <div className="relative space-y-5">
      <div className="absolute bottom-10 left-[19px] top-10 w-px bg-gradient-to-b from-violet-300 via-cyan-300 to-transparent sm:left-[23px]" />

      {uniqueExperiences.map((exp, index) => {
        const isExpanded = expandedIndex === index;
        const isInternship =
          exp.title?.toLowerCase().includes("intern") ?? false;

        return (
          <article
            key={`${exp.title}-${exp.organization}-${exp.period}`}
            className={`group relative ml-2 rounded-2xl border bg-white transition-all duration-300 sm:ml-0 ${
              isExpanded
                ? "border-violet-200 shadow-lg shadow-violet-100/40"
                : "border-slate-200 shadow-sm hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-lg hover:shadow-slate-200/50"
            }`}
          >
            <div className="absolute -left-[1px] top-7 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-xl border border-violet-100 bg-white text-violet-600 shadow-sm sm:left-[23px] sm:translate-x-0">
              <FiBriefcase size={18} />
            </div>

            <div className="pl-10 sm:pl-[82px]">
              <button
                type="button"
                aria-expanded={isExpanded}
                onClick={() => toggleExpand(index)}
                className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-7"
              >
                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                      {isInternship ? "Internship" : "Professional Experience"}
                    </span>

                    {exp.period && (
                      <span className="text-xs font-medium text-slate-500 sm:text-sm">
                        {exp.period}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-violet-700 sm:text-xl">
                    {exp.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-[#079DBB] sm:text-base">
                    {exp.organization}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {exp.description}
                  </p>
                </div>

                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isExpanded
                      ? "rotate-180 border-violet-200 bg-violet-50 text-violet-600"
                      : "border-slate-200 text-slate-500 group-hover:border-cyan-200 group-hover:text-[#079DBB]"
                  }`}
                >
                  <FiChevronDown size={18} />
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ${
                  isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="mx-5 border-t border-slate-100 pb-6 pt-5 sm:mx-7">
                    {exp.skills && exp.skills.length > 0 && (
                      <div>
                        <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                          Technologies & Skills
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={`${skill}-${skillIndex}`}
                              className="rounded-lg border border-violet-100 bg-violet-50/70 px-3 py-1.5 text-sm font-medium text-violet-700 transition-colors hover:border-violet-300 hover:bg-violet-100"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {isInternship && (
                      <div className="mt-6">
                        <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                          Internship Highlights
                        </h4>

                        <ul className="space-y-3">
                          {internshipHighlights.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#079DBB]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {!isInternship && (
                      <div className="mt-6 space-y-6">
                        <div>
                          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                            Areas of Contribution
                          </h4>

                          <ul className="space-y-3">
                            {professionalContributions.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#079DBB]" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                            Project Highlights
                          </h4>

                          <div className="grid gap-3 sm:grid-cols-2">
                            {projectHighlights.map((project) => (
                              <div
                                key={project.title}
                                className={`rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition-colors ${project.accent}`}
                              >
                                <h5 className="font-bold text-slate-900">
                                  {project.title}
                                </h5>

                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                  {project.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ExperienceSection;
