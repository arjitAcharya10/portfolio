import React, { useState, useEffect, useRef } from 'react';
import { User } from '../types/user';
import { fetchUserProfile } from '../services/userService';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';
import { FiAlertCircle, FiMenu, FiX, FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import CVModal from '../components/HireMeSection';

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [showCV, setShowCV] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const hireSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadUserProfile = async (): Promise<void> => {
      try {
        setLoading(true);
        setError(null);
        const userData = await fetchUserProfile();
        setUser(userData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to load user profile'
        );
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    loadUserProfile();
  }, []);

  // Hide CV when scrolling away from Hire Me section
  useEffect(() => {
    if (!showCV) return;
    const handleScroll = () => {
      const hireSection = document.getElementById('hire-cv-section');
      if (!hireSection) return;
      const rect = hireSection.getBoundingClientRect();
      // If the section is not visible in viewport, hide CV
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        setShowCV(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showCV]);
  useEffect(() => {
    if (showCV) {
      setTimeout(() => {
        const el = document.getElementById("hire");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  }, [showCV]);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'experience', 'contact'];

    const updateActiveSection = () => {
      const markerPosition = 180;
      const visibleSection = sectionIds
        .map((sectionId) => document.getElementById(sectionId))
        .find((section) => {
          if (!section) return false;
          const bounds = section.getBoundingClientRect();
          return bounds.top <= markerPosition && bounds.bottom > markerPosition;
        });

      if (visibleSection?.id) {
        setActiveSection(visibleSection.id);
      }
    };

    const hashSection = window.location.hash.slice(1);
    if (sectionIds.includes(hashSection)) {
      setActiveSection(hashSection);
    }

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    window.addEventListener('hashchange', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderErrorState = (): React.ReactNode => {
    return (
      <div className="bg-red-900/20 border-2 border-red-600 rounded-lg p-6 flex items-center gap-3">
        <FiAlertCircle className="text-red-400 text-2xl flex-shrink-0" />
        <div>
          <h3 className="font-bold text-red-200">Error</h3>
          <p className="text-red-300">{error}</p>
        </div>
      </div>
    );
  };

  const renderContent = (): React.ReactNode => {
    if (error) return renderErrorState();

    return (
      <>
        {/* Hero Section */}
        <section id="home" className="hero-section relative min-h-screen bg-gradient-to-b from-black via-blue-900/10 to-black pt-32 pb-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-8">
              {/* Left Content */}
              <div className="hero-copy space-y-8">
                <div>
                  <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4">
                    Developer Profile
                  </h3>
                  <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
                    Hi, I’m <span className="text-cyan-400">{user?.name?.split(' ')[0]}</span>
                  </h1>
                  <h2 className="text-4xl md:text-5xl font-bold">
                    <span className="text-  ">Building Reliable Backends. Powering Modern Applications..</span>
                  </h2>
                </div>

                <p className="text-gray-300 text-lg max-w-md leading-relaxed">
                  Junior Backend Developer with 1+ year of experience building backend services and RESTful APIs using Java and Spring Boot. I focus on clean code, efficient database design, and secure, scalable applications that solve real-world problems.
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-4 flex-wrap">
                  <a href="#projects" className="bg-cyan-500 text-black font-bold px-8 py-3 rounded-full hover:bg-cyan-400 transition-all uppercase text-sm tracking-widest">
                    View My Projects
                  </a>
                  <a href="/arjit_cv.jpg" download className="border-2 border-cyan-500 text-cyan-400 font-bold px-8 py-3 rounded-full hover:bg-cyan-500/10 transition-all uppercase text-sm tracking-widest">
                    Download Resume
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-6 items-center pt-4">
                  {user?.contact?.email && (
                    <a href={`mailto:${user.contact.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl">
                      <FiMail />
                    </a>
                  )}
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl">
                    <FiGithub />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl">
                    <FiLinkedin />
                  </a>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-cyan-500 to-transparent" />
                </div>

              </div>

              {/* Right Image Placeholder */}
              <div className="hero-photo relative">
                <div className="absolute inset-8 bg-gray-100 rounded-full blur-2xl" />
                <div className="relative bg-white border border-gray-200 rounded-[2rem] p-5 overflow-hidden shadow-xl">
                  <div className="relative w-full aspect-square bg-gray-100 rounded-[1.5rem] overflow-hidden">
                    <img src="/profile-hero.png" alt="Arjit Acharya" className='w-full h-full object-cover' />
                  </div>
                  <div className="absolute bottom-8 right-1 bg-white rounded-full px-4 py-3 shadow-lg text-sm font-semibold text-gray-900">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2" />
                    Available for opportunities
                  </div>
                </div>
              </div>
            </div>
            

<div className="hero-stats grid grid-cols-2 md:grid-cols-4 border-t border-gray-200 mt-12 pt-8">
  {[
    { value: '20+', label: 'Projects Completed' },
    { value: '150+', label: 'GitHub Contributions' },
    { value: '3+', label: 'Years Learning' },
    { value: '2+', label: 'Certifications' },
  ].map((stat) => {
    const isCertification = stat.label === 'Certifications';

    return (
      <div
        key={stat.label}
        className={`flex items-center gap-3 px-4 py-3 border-r last:border-0 border-gray-200 ${
          isCertification
            ? 'certification-stat relative z-0 rounded-[2rem] px-7 py-5 shadow-[12px_12px_0px_0px_#bae6fd]'
            : ''
        }`}
      >
        <div
          className={`text-2xl font-bold ${
            isCertification ? 'text-white' : 'text-gray-900'
          }`}
        >
          {stat.value}
        </div>
        <div
          className={`text-xs ${
            isCertification ? 'text-slate-300' : 'text-gray-500'
          }`}
        >
          {stat.label}
        </div>
      </div>
    );
  })}
</div>


          </div>
        </section>





        {/* Experience Section */}

        <section
          id="experience"
          className="relative overflow-hidden border-y border-slate-100 bg-gradient-to-b from-white via-slate-50/50 to-white py-24"
        >
          <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-violet-100/40 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="mb-12 max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4">
                My Journey
                </p>
              </div>

              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Experience{" "}
                <span className="bg-gradient-to-r from-violet-600 to-[#079DBB] bg-clip-text text-transparent">
                  & Growth
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                From learning backend fundamentals to developing practical software
                solutions, every experience helps me grow as a developer.
              </p>
            </div>

            <ExperienceSection experiences={user?.experiences ?? []} />
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="bg-black py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-12">
              <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Portfolio
              </p>
              <h3 className="text-4xl font-bold text-white">Recent Projects</h3>
            </div>
            <ProjectsSection projects={user?.projects?.slice(0, 4)} />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative overflow-hidden border-y border-violet-100 bg-white py-20 md:py-28">
          <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-violet-100/50 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-8">
                <div>
                  <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-violet-600">
                    About Me
                  </p>

                  <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                    Turning Ideas Into{" "}
                    <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                      Reliable Software.
                    </span>
                  </h2>

                  <div className="space-y-8">
                    <div className="mt-6 space-y-4 text-base leading-8 text-slate-600 sm:text-lg">
                      <p>
                        I'm a Junior Backend Developer specializing in Java and Spring Boot,
                        with 1+ year of hands-on experience building web applications and
                        backend services. I focus on developing secure RESTful APIs,
                        implementing authentication and authorization, and designing
                        efficient database solutions using MySQL.
                      </p>

                      <p>
                        I enjoy applying object-oriented programming principles, writing
                        clean and maintainable code, and building backend systems that are
                        reliable, secure, and scalable. My primary focus is Spring Boot
                        development, including application architecture, data persistence,
                        API design, and backend security.
                      </p>

                      <p>
                        I also have working knowledge of React, which helps me understand
                        frontend integration and build user interfaces that communicate
                        effectively with backend services. I'm continuously improving my
                        skills and exploring better ways to solve real-world engineering
                        problems.
                      </p>
                    </div>

                    <div className="rounded-r-xl border-l-4 border-[#079DBB] bg-cyan-50/70 px-5 py-4">
                      <p className="text-base font-bold leading-7 text-slate-800 sm:text-lg">
                        "Writing better code today to build better solutions tomorrow."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-5">
                  {[
                    { value: "39+", label: "Skills" },
                    { value: "4+", label: "Projects" },
                    { value: "1y+", label: "Experience" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="group rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100/60 sm:p-6"
                    >
                      <div className="text-2xl font-extrabold tracking-wider text-violet-600 sm:text-3xl">
                        {stat.value}
                      </div>

                      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-violet-200/60 to-cyan-100/60 blur-xl" />

                <div className="relative rounded-3xl border border-violet-100 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="23"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="3" />
                          <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.8 1.8-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V22h-2.55v-.1a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.8-1.8.06-.06A1.7 1.7 0 0 0 8.1 17a1.7 1.7 0 0 0-1.56-1.03H6v-2.55h.1a1.7 1.7 0 0 0 1.56-1.03 1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.8-1.8.06.06A1.7 1.7 0 0 0 11 8.37a1.7 1.7 0 0 0 1.03-1.56V6h2.55v.1a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.8 1.8-.06.06A1.7 1.7 0 0 0 19 11a1.7 1.7 0 0 0 1.56 1.03h.1v2.55h-.1A1.7 1.7 0 0 0 19.4 15Z" />
                        </svg>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900">
                        Technical Skills
                      </h3>
                    </div>

                    <a
                      href="#skills"
                      className="shrink-0 text-sm font-semibold text-violet-600 transition-colors hover:text-violet-800"
                    >
                      View All <span aria-hidden="true">→</span>
                    </a>
                  </div>

                  <div className="space-y-7">
                    {[
                      {
                        title: "Backend Development",
                        skills: [
                          "Java",
                          "Spring Boot",
                          "Spring Security",
                          "REST APIs",
                          "Hibernate",
                          "JPA",
                          "MySQL",
                        ],
                      },
                      {
                        title: "Frontend Development",
                        skills: [
                          "React",
                          "HTML",
                          "CSS",
                          "Tailwind CSS",
                          "JavaScript",
                        ],
                      },
                      {
                        title: "Tools & Technologies",
                        skills: [
                          "Git",
                          "Docker",
                          "Postman",
                          "Maven",
                          "Linux",
                          "VS Code",
                          "IntelliJ IDEA",
                        ],
                      },
                      {
                        title: "Other Skills",
                        skills: [
                          "JWT",
                          "OAuth2",
                          "CI/CD",
                          "Agile",
                          "Problem Solving",
                        ],
                      },
                    ].map((group) => (
                      <div key={group.title}>
                        <h4 className="mb-3 text-sm font-bold text-slate-800 sm:text-base">
                          {group.title}
                        </h4>

                        <div className="flex flex-wrap gap-2.5">
                          {group.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-xl border border-violet-200 bg-white px-3.5 py-2 text-sm font-medium text-violet-700 transition-all duration-200 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-800"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-5">
                    <p className="text-sm text-slate-500">
                      Interested in working together?
                      <a
                        href="#contact"
                        className="ml-1 font-semibold text-violet-600 transition-colors hover:text-violet-800"
                      >
                        Let's connect →
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-black py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-12">
              <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Contact Me
              </p>
              <h3 className="text-4xl font-bold text-white">Get In Touch</h3>
            </div>
            <ContactSection contact={user?.contact} />
          </div>
        </section>
      </>
    );
  };

  return (
    <div className="portfolio-shell min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="bg-black/80 backdrop-blur-md border-b border-cyan-500/30">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl font-black tracking-tight">
              <span className="text-slate-900">ARJIT</span><span className="text-violet-600">.</span><span className="text-slate-400">DEV</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={`nav-link text-sm font-semibold text-gray-300 hover:text-violet-600 transition-colors uppercase tracking-wider ${
                    activeSection === link.toLowerCase() ? 'active-nav-link' : ''
                  }`}
                  onClick={() => {
                    setActiveSection(link.toLowerCase());
                    setShowCV(false);
                  }}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                setShowCV(true);
              }}
              className="hidden md:block bg-violet-600 text-white font-bold px-6 py-3 rounded-full hover:bg-violet-700 transition-all text-sm"
            >
              Hire Me
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-violet-600 text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-violet-100 p-6 space-y-4">
              {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={`nav-link block text-sm font-semibold text-gray-300 hover:text-violet-600 transition-colors uppercase tracking-wider ${
                    activeSection === link.toLowerCase() ? 'active-nav-link' : ''
                  }`}
                  onClick={() => {
                    setActiveSection(link.toLowerCase());
                    setMobileMenuOpen(false);
                    setShowCV(false);
                  }}
                >
                  {link}
                </a>
              ))}
              <button
                onClick={() => {
                  setShowCV(true);
                  setMobileMenuOpen(false);
                }}
                className="block w-full bg-violet-600 text-white font-bold px-6 py-3 rounded-full hover:bg-violet-700 transition-all text-sm text-center"
              >
                Hire Me
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="w-full">
        {loading ? (
          <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="space-y-6 w-full max-w-4xl px-4 md:px-8">
              <div className="bg-gray-900/50 rounded-lg shadow-lg p-8 animate-pulse border border-gray-700">
                <div className="h-12 bg-gray-700/50 rounded w-48 mb-4" />
                <div className="h-6 bg-gray-700/50 rounded w-32" />
              </div>
              {Array(3).fill(0).map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-900/50 rounded-lg shadow-lg h-48 animate-pulse border border-gray-700"
                />
              ))}
            </div>
          </div>

        ) : (
          renderContent()
        )
        }

      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-cyan-500/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© 2026 Arjit Acharya. All rights reserved.</p>
              <p className="text-xs mt-1">Designed & Developed with </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors text-lg"
              >
                <FiGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors text-lg"
              >
                <FiLinkedin />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors text-lg"
              >
                <FiMail />
              </a>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="bg-cyan-500 text-black p-3 rounded-full hover:bg-cyan-400 transition-all"
            >
              <FiArrowUp className="text-lg" />
            </button>
          </div>
        </div>
      </footer>

      {showCV && (
        <div
          id="hire-cv-section"
          ref={hireSectionRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          style={{ backdropFilter: 'blur(4px)' }}
        >
          <div className="relative bg-[#111] border-2 border-cyan-500 rounded-2xl shadow-2xl p-8 w-full max-w-xl mx-auto flex flex-col items-center">
            <button
              onClick={() => setShowCV(false)}
              className="absolute top-4 right-4 bg-cyan-500 text-black font-bold px-4 py-2 rounded-full hover:bg-cyan-400 transition-all text-sm"
              aria-label="Close CV"
            >
              Close
            </button>
            <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center w-full">
              Hire Me
            </h2>
            <CVModal show={showCV} />
          </div>
        </div>
      )}
    </div>

  );

};

export default ProfilePage;
