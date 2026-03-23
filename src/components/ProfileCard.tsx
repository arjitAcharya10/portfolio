import React from 'react';
import { User } from '../types/user';

interface ProfileCardProps {
  user?: User;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  if (!user) {
    return (
      <div className="bg-gray-900 rounded-lg shadow-lg p-8 animate-pulse border-2 border-gray-700">
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 bg-gray-700 rounded-full" />
          <div className="flex-1">
            <div className="h-6 bg-gray-700 rounded w-40 mb-2" />
            <div className="h-4 bg-gray-700 rounded w-32 mb-2" />
            <div className="h-4 bg-gray-700 rounded w-28" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-lg shadow-xl p-8 border-2 border-blue-600">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="w-32 h-32 sm:w-28 sm:h-28 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
          {user.name.charAt(0)}
        </div>
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">
            {user.name}
          </h1>
          <p className="text-2xl text-blue-400 font-bold mb-4">{user.role}</p>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-center text-gray-300 gap-3">
              <span className="text-blue-400 font-bold">📍</span>
              <span className="text-lg">{user.location}</span>
            </div>
            <div className="flex items-center text-gray-300 gap-3">
              <span className="text-blue-400 font-bold">⏱</span>
              <span className="text-lg">{user.experience} Professional Experience</span>
            </div>
            <div className="pt-2">
              <span className="inline-block px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">
                Junior Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
