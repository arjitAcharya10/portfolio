import React, { useState } from 'react';
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiAward } from 'react-icons/fi';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'profile', label: 'Profile', icon: <FiUser /> },
    { id: 'skills', label: 'Skills', icon: <FiCode /> },
    { id: 'highlights', label: 'Highlights', icon: <FiAward /> },
    { id: 'projects', label: 'Projects', icon: <FiHome /> },
    { id: 'contact', label: 'Contact', icon: <FiUser /> },
  ];

  const handleNavClick = (id: string) => {
    onSectionChange(id);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-40 md:hidden p-2 rounded-lg bg-blue-600 text-white"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <aside
        className={`fixed md:sticky top-0 left-0 h-screen md:h-auto w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white shadow-xl transition-all duration-300 z-30 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="p-6 pt-16 md:pt-6">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white">Dashboard</h3>
            <p className="text-blue-200 text-sm">Developer Profile</p>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-blue-700">
          <p className="text-xs text-blue-300 text-center">
            © 2024 Developer Portfolio
          </p>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
