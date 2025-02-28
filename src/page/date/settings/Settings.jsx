import React, { useState } from 'react';
import { uploadToCloudinary } from '../../../utils/uploadCloudinary';
import Loader from '../../loader';
import { useMakerequest } from '../../../hook/useMakeRequest';
import { DATING_USER_URL } from '../../../constant/resources';

const Settings = () => {
  // Initial state for user profile
  const [profile, setProfile] = useState({
    occupation: "",
    hobbies: "",
    genotype: "",
    bloodGroup: "",
    bio: "",
    religion: "",
    pictures: []
  });

  // State for file input
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false)
  const makeRequest = useMakerequest()

  // Genotype options
  const genotypeOptions = ["AA", "AS", "SS", "AC", "SC"];
  
  // Blood group options
  const bloodGroupOptions = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  
  // Religion options
  const religionOptions = [
    "Christianity", 
    "Islam", 
    "Hinduism", 
    "Buddhism", 
    "Judaism", 
    "Sikhism", 
    "Traditional Religion",
    "Spiritual but not religious",
    "Agnostic",
    "Atheism",
    "Prefer not to say",
    "Other"
  ];

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle select changes
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const file = [e.target.files[0]]
    setSelectedFiles([...selectedFiles, ...file])
    // Create preview URLs
    const newImageUrls = files.map(file => URL.createObjectURL(file));
    
    setProfile(prev => ({
      ...prev,
      pictures: [...prev.pictures, ...newImageUrls]
    }));
  };

  // Remove image
  const removeImage = (index) => {
    const newpictures = [...profile.pictures];
    newpictures.splice(index, 1);
    
    setProfile(prev => ({
      ...prev,
      pictures: newpictures
    }));
  };

  const saveChanges = async (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    setLoading(true)
    const payload = {...profile, pictures: selectedFiles}
    const formData = new FormData()
    formData.append('pictures', selectedFiles)
    formData.append('occupation', profile.occupation)
    formData.append('hobbies', profile.hobbies)
    formData.append('genotype', profile.genotype)
    formData.append('bloodGroup', profile.bloodGroup)
    formData.append('bio', profile.bio)
    formData.append('religion', profile.religion)
    // console.log("Saving profile:", formData);
    makeRequest(
        DATING_USER_URL,
        'POST',
        formData,
        (data)=>{console.log(data)},
        (error)=>{console.log(error)},
        ()=>{setLoading(false)}
    )
    
  };


  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-800">Profile Settings</h2>
        <p className="text-sm text-gray-500">Update your profile information that will be visible to other users</p>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Bio */}
        <div className="space-y-2">
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700">About Me</label>
          <textarea
            id="bio"
            name="bio"
            rows="4"
            placeholder="Tell others about yourself, what makes you unique, and what you're looking for..."
            value={profile.bio}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500">Your bio is one of the first things people will read about you. Make it count!</p>
        </div>
        
        {/* Occupation */}
        <div className="space-y-2">
          <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">Occupation</label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            placeholder="What do you do for work?"
            value={profile.occupation}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Religion */}
        <div className="space-y-2">
          <label htmlFor="religion" className="block text-sm font-medium text-gray-700">Religion</label>
          <select
            id="religion"
            name="religion"
            value={profile.religion}
            onChange={handleSelectChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Select your religion</option>
            {religionOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        {/* Hobbies */}
        <div className="space-y-2">
          <label htmlFor="hobbies" className="block text-sm font-medium text-gray-700">Hobbies & Interests</label>
          <textarea
            id="hobbies"
            name="hobbies"
            rows="3"
            placeholder="What do you enjoy doing in your free time?"
            value={profile.hobbies}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Genotype */}
        <div className="space-y-2">
          <label htmlFor="genotype" className="block text-sm font-medium text-gray-700">Genotype</label>
          <select
            id="genotype"
            name="genotype"
            value={profile.genotype}
            onChange={handleSelectChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Select your genotype</option>
            {genotypeOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        {/* Blood Group */}
        <div className="space-y-2">
          <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">Blood Group</label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={profile.bloodGroup}
            onChange={handleSelectChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Select your blood group</option>
            {bloodGroupOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        {/* Profile pictures */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Profile pictures</label>
          
          {/* Image previews */}
          <div className="grid grid-cols-3 gap-4">
            {profile.pictures.map((imageUrl, index) => (
              <div key={index} className="relative group">
                <img 
                  src={imageUrl} 
                  alt={`User upload ${index}`} 
                  className="w-full h-32 object-cover rounded-md"
                />
                <button 
                  className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeImage(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            
            {/* Upload placeholder */}
            {profile.pictures.length < 4 && (
              <div className="border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center h-32 cursor-pointer hover:border-gray-400 transition-colors">
                <label className="cursor-pointer flex flex-col items-center justify-center w-full h-full">
                  <span className="text-sm text-gray-500">+ Add Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>
          <p className="text-xs text-gray-500">Upload up to 6 pictures. First image will be your main profile picture.</p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t">
        <button 
          onClick={saveChanges} 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {loading ? '...loading' : 'Update'}
        </button>
      </div>
    </div>
  );
};

export default Settings;