import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">الملف الشخصي</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        {user ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">مرحباً {user.name}</h2>
            <p className="text-gray-600">صفحة الملف الشخصي - قيد التطوير</p>
          </div>
        ) : (
          <p className="text-gray-600">يرجى تسجيل الدخول لعرض الملف الشخصي</p>
        )}
      </div>
    </div>
  );
};

export default Profile; 