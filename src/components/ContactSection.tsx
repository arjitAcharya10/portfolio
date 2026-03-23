import React from 'react';
import { Contact } from '../types/user';
import { FiMail, FiPhone, FiLinkedin } from 'react-icons/fi';

interface ContactSectionProps {
  contact?: Contact;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  if (!contact) {
    return (
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 animate-pulse border-2 border-gray-700">
        <div className="h-6 bg-gray-700 rounded w-32 mb-4" />
        <div className="space-y-3">
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="h-12 bg-gray-700 rounded" />
          ))}
        </div>
      </div>
    );
  }

  const contactItems: Array<{
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
  }> = [
    {
      icon: <FiMail className="text-xl" />,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: <FiPhone className="text-xl" />,
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
    {
      icon: <FiLinkedin className="text-xl" />,
      label: 'LinkedIn',
      value: contact.linkedin,
      href: `https://${contact.linkedin.replace('linkedin.com/', 'linkedin.com/in/')}`,
    },
  ];

  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-6 border-2 border-cyan-500">
      <div className="flex items-center gap-3 mb-6">
        <FiMail className="text-2xl text-cyan-400" />
        <h2 className="text-2xl font-bold text-white">Contact</h2>
      </div>
      <div className="space-y-3">
        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target={item.label === 'LinkedIn' ? '_blank' : undefined}
            rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-3 p-3 rounded-lg bg-cyan-900/20 border-2 border-cyan-600 hover:border-cyan-400 hover:shadow-md transition-all duration-200 group"
          >
            <span className="text-cyan-400 group-hover:text-cyan-300">
              {item.icon}
            </span>
            <div className="flex-1">
              <p className="text-xs text-cyan-300 font-semibold uppercase tracking-wide">
                {item.label}
              </p>
              <p className="text-gray-200 font-medium group-hover:text-cyan-300 transition-colors">
                {item.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
