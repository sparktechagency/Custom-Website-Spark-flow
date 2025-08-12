'use client';
import icons from '@/icons/icon';
import { message } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [fullName, setFullName] = useState("Md. Nurunnnabi");
    const [companyName, setCompanyName] = useState("Toto Company");
    const [profilePicture, setProfilePicture] = useState("https://randomuser.me/api/portraits/men/61.jpg");
    const [businessLicense, setBusinessLicense] = useState("https://divisionalconsultancy.com/wp-content/uploads/2024/04/Tr-702x1024.jpg");

    // Function to toggle edit mode
    const handleEditClick = () => {
        setIsEditing(!isEditing);
        if (isEditing) {
            return message.success('Changes saved successfully!');
        };
    };

    // Function to handle profile picture upload
    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result); // Set uploaded image
            };
            reader.readAsDataURL(file); // Read the image file
        }
    };

    // Function to handle business license upload
    const handleBusinessLicenseChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBusinessLicense(reader.result); // Set uploaded image
            };
            reader.readAsDataURL(file); // Read the image file
        }
    };

    // Handle save changes (in this example, it just toggles the edit mode)
    const handleSave = () => {
        setIsEditing(false);  // Save and exit edit mode
        // Logic to save the data goes here (e.g., send it to the backend)
    };

    return (
        <div className="p-6 bg-gray-50 rounded-lg md:mx-0 mx-4">
            <div className="flex justify-between items-center mb-6">
                <Link href="/" className="text-2xl font-semibold flex items-center gap-2">{icons.left} Your Information</Link>
                <button
                    onClick={handleEditClick}
                    className={` cursor-pointer text-gray-600 px-8 py-2 rounded-md ${!isEditing ? 'bg-[#203f9a] text-white' : ' bg-green-700 text-white'}`}
                >
                    {isEditing ? "Save" : "Edit"}
                </button>
            </div>

            <div className="">
                {/* Profile Picture and Business License */}
                <div className="space-y-4 mb-5">
                    <div className="flex items-center space-x-4">
                        {/* Profile Picture */}
                        <div>
                            <h3 className="font-semibold mb-1">Profile Picture</h3>
                            <div className="w-36 h-40 rounded-lg border border-gray-100 p-2 bg-white">
                                <img
                                    src={profilePicture}
                                    alt="Profile"
                                    className="w-full h-full rounded-lg object-cover"
                                />
                                {isEditing && (
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleProfilePictureChange}
                                        className="mt-2 w-full border border-gray-300 rounded-md p-1 text-sm"
                                    />
                                )}
                            </div>
                        </div>

                        {/* Business License */}
                        <div>
                            <h3 className="font-semibold mb-1">Business License</h3>
                            <div className="w-36 h-40 rounded-lg border border-gray-100 p-2 bg-white">
                                <img
                                    src={businessLicense}
                                    alt="Business License"
                                    className="w-full h-full rounded-lg object-cover"
                                />
                                {isEditing && (
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleBusinessLicenseChange}
                                        className="mt-2  w-full border border-gray-300 rounded-md p-1 text-sm"
                                    />
                                )}

                            </div>
                        </div>
                    </div>
                </div>

                {
                    isEditing && (
                        <span>
                            <br />
                        </span>
                    )
                }
                {/* Form Fields */}
                <div className="space-y-4">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-semibold">Full Name</label>
                        <input
                            id="fullName"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            disabled={!isEditing}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="companyName" className="block text-sm font-semibold">Company Name</label>
                        <input
                            id="companyName"
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            disabled={!isEditing}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
