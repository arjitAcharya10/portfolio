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
        <section className="relative min-h-screen bg-gradient-to-b from-black via-blue-900/10 to-black pt-32 pb-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-8">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4">
                    Developer Profile
                  </h3>
                  <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
                    HI! I'M <span className="text-cyan-400">{user?.name?.split(' ')[0]}</span>
                  </h1>
                  <h2 className="text-4xl md:text-5xl font-bold">
                    <span className="text-white">I'M A </span>
                    <span className="text-cyan-400">DEVELOPER</span>
                  </h2>
                </div>

                <p className="text-gray-300 text-lg max-w-md leading-relaxed">
                    Junior Backend Developer with 1+ year of experience in developing and maintaining robust server-side applications. Skilled in Java, Spring Boot, and RESTFUL API development, with a strong focus on performance, security, and scalability.
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-4 flex-wrap">
                  <a href="#contact" className="bg-cyan-500 text-black font-bold px-8 py-3 rounded-full hover:bg-cyan-400 transition-all uppercase text-sm tracking-widest">
                    Get In Touch
                  </a>
                  <a href="#projects" className="border-2 border-cyan-500 text-cyan-400 font-bold px-8 py-3 rounded-full hover:bg-cyan-500/10 transition-all uppercase text-sm tracking-widest">
                    View Projects
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
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500/50 rounded-2xl p-8 overflow-hidden">
                  <div className="relative w-full aspect-square bg-gradient-to-br from-gray-800 to-black rounded-xl overflow-hidden">
                <img src="/profile.jpg" alt="profile" className='w-full h-full' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About/Skills Section */}
        <section id="about" className="bg-black py-24 relative overflow-hidden border-y border-cyan-500/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* About Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">
                    About Me
                  </h2>
                  <h3 className="text-5xl font-bold text-white mb-4 leading-tight">
                    Available For Project Work & Collaboration
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
A dedicated Junior Backend Developer (1+ Year Experience) with hands-on experience in building scalable applications using Java, Spring Boot, and Angular. Skilled in developing secure RESTful APIs and integrating them with dynamic frontend interfaces.

Experienced in implementing JWT-based authentication, managing databases like MySQL, and creating responsive user interfaces using Angular. Possesses a strong understanding of both backend logic and frontend interaction, enabling seamless end-to-end application development.                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: '39+', label: 'Skills' },
                    { value: '4+', label: 'Projects' },
                    { value: '1y+', label: 'Experience' }
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all"
                    >
                      <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                      <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Display */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl blur-3xl" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500/30 rounded-3xl p-8">
                  <h4 className="text-xl font-bold text-white mb-6">Technical Skills</h4>
                  <div className="flex flex-wrap gap-3">
                    {user?.skills?.slice(0, 12).map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold hover:border-cyan-500 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm mt-6">And {Math.max(0, (user?.skills?.length || 0) - 12)} more skills...</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      

        {/* Experience Section */}
        <section id="experience" className="bg-black py-24 relative overflow-hidden border-y border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">
                Career Journey
              </h2>
              <h3 className="text-4xl font-bold text-white">Experience & Timeline</h3>
            </div>
            <ExperienceSection experiences={user?.experiences} />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-black py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">
                 Portfolio
              </h2>
              <h3 className="text-4xl font-bold text-white">Recent Projects</h3>
            </div>
            <ProjectsSection projects={user?.projects?.slice(0, 4)} />
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="bg-black py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">
                Contact Me
              </h2>
              <h3 className="text-4xl font-bold text-white">Get In Touch</h3>
            </div>
            <ContactSection contact={user?.contact} />
          </div>
        </section>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="bg-black/80 backdrop-blur-md border-b border-cyan-500/30">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <span className="text-cyan-400">ARJIT.DEV</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {['About', 'Projects', 'Contact','Experience'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-colors uppercase tracking-wider"
                  onClick={() => setShowCV(false)}
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
  className="hidden md:block bg-cyan-500 text-black font-bold px-6 py-2 rounded-full hover:bg-cyan-400 transition-all uppercase text-sm tracking-widest"
>
  Hire Me
</button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-cyan-400 text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black border-t border-cyan-500/30 p-6 space-y-4">
              {['About', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-colors uppercase tracking-wider"
                  onClick={() => {
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
  className="block w-full bg-cyan-500 text-black font-bold px-6 py-2 rounded-full hover:bg-cyan-400 transition-all uppercase text-sm tracking-widest text-center"
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
        style={{backdropFilter: 'blur(4px)'}}
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
