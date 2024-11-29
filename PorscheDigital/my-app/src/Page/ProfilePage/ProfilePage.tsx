import React from 'react';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
  const location = useLocation();
  const selectedUser = location.state?.selectedUser; // Accedemos a los datos pasados desde la página anterior

  if (!selectedUser) {
    return (
      <div className="min-h-screen flex items-center justify-center text-black">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <p>No user selected.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-semibold mb-4">Welcome, {selectedUser.title}!</h2>
        <p className="text-lg text-gray-700 mb-4">We are glad to have you here.</p>
        <div className="bg-blue-100 p-4 rounded-md">
          <h3 className="text-xl font-medium">Your Vehicle</h3>
          <p className="text-lg text-gray-600">{selectedUser.description}</p>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={() => alert('Navigate to another section or perform an action')}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;