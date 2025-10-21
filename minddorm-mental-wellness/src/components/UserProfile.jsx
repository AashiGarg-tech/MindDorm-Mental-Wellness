import React, { useState } from 'react';
import { User, Mail, Edit, Camera, Save } from 'lucide-react';

const UserProfile = ({ userEmail, userName: initialUserName, onUpdateProfile }) => {
  // Use state to manage the editable fields (Name)
  const [userName, setUserName] = useState(initialUserName || 'Wellness User');
  const [avatarUrl, setAvatarUrl] = useState('https://placehold.co/100x100/93c5fd/ffffff?text=U'); // Placeholder
  const [isEditingName, setIsEditingName] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Function to simulate saving the profile data
  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500)); 

    console.log('Profile Updated:', { name: userName, avatar: avatarUrl });
    
    // In a real app, you would call your API here and then call onUpdateProfile(newName)
    // For now, we just log and reset the saving state.
    
    setIsSaving(false);
    setIsEditingName(false);
    // onUpdateProfile(userName); // Pass updated name back to App.jsx if needed
    alert('Profile saved successfully!');
  };
  
  // Placeholder for avatar edit function
  const handleAvatarEdit = () => {
    // In a real app, this would open a file selection dialog
    alert('Simulating Avatar Edit: File picker would open now.');
    // For demo: setAvatarUrl('https://new-avatar-url.jpg');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-2xl mt-10">
        
        <h1 className="text-3xl font-bold text-gray-800 border-b pb-3 mb-8 flex items-center space-x-3">
          <User className="w-7 h-7 text-blue-600" /> 
          <span>My Profile Settings</span>
        </h1>

        {/* 1. Avatar Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-28 h-28 rounded-full shadow-lg border-4 border-white ring-4 ring-blue-200">
            <img 
              src={avatarUrl} 
              alt="User Avatar" 
              className="w-full h-full object-cover rounded-full" 
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100/93c5fd/ffffff?text=U" }}
            />
            {/* Edit Button for Avatar */}
            <button
              onClick={handleAvatarEdit}
              className="absolute bottom-0 right-0 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-150 shadow-md"
              title="Change Avatar"
            >
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <p className="mt-3 text-xl font-semibold text-gray-800">{userName}</p>
        </div>

        {/* 2. Profile Details Form */}
        <form onSubmit={handleSave} className="space-y-6">
          
          {/* Editable Name Field */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                disabled={!isEditingName}
                className={`w-full py-2 px-3 text-lg rounded-md outline-none transition duration-150 ${
                    isEditingName 
                        ? 'bg-white border border-blue-400 focus:ring-2 focus:ring-blue-200'
                        : 'bg-transparent text-gray-800'
                }`}
                required
              />
              <button 
                type="button"
                onClick={() => setIsEditingName(!isEditingName)}
                className="text-blue-500 hover:text-blue-700 transition duration-150 p-1 rounded-full"
                title={isEditingName ? "Cancel Editing" : "Edit Name"}
              >
                <Edit className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Non-Editable Email Field */}
          <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email (Non-Editable)</label>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-500" />
              <p className="w-full py-2 px-0 text-lg text-gray-600 font-medium select-text">
                {userEmail}
              </p>
            </div>
          </div>

          {/* Save Button */}
          {isEditingName && (
            <div className="pt-4 border-t mt-8">
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition duration-150 shadow-md disabled:opacity-50"
                disabled={isSaving}
              >
                {isSaving ? (
                    <>
                        <span className="animate-spin h-5 w-5 border-4 border-t-white border-green-200 rounded-full"></span>
                        <span>Saving...</span>
                    </>
                ) : (
                    <>
                        <Save className="w-5 h-5" />
                        <span>Save Changes</span>
                    </>
                )}
              </button>
            </div>
          )}
        </form>

      </div>
    </div>
  );
};

export default UserProfile;
