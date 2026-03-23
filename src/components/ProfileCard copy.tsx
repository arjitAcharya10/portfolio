import React from 'react';
import { User } from '../types/user';
import { FiMapPin, FiBriefcase } from 'react-icons/fi';

interface ProfileCardProps {
  user?: User;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  if (!user) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 animate-pulse">
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 bg-gray-300 rounded-full" />
          <div className="flex-1">
            <div className="h-6 bg-gray-300 rounded w-40 mb-2" />
            <div className="h-4 bg-gray-300 rounded w-32 mb-2" />
            <div className="h-4 bg-gray-300 rounded w-28" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-xl p-8 border border-blue-100">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="w-32 h-32 sm:w-28 sm:h-28 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
          {user.name.charAt(0)}
        </div>
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            {user.name}
          </h1>
          <p className="text-xl text-blue-600 font-semibold mb-4">{user.role}</p>
          <div className="space-y-2">
            <div className="flex items-center text-gray-700 gap-2">
              <FiBriefcase className="text-blue-600" />
              <span>{user.experience}</span>
            </div>
            <div className="flex items-center text-gray-700 gap-2">
              <FiMapPin className="text-blue-600" />
              <span>{user.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
