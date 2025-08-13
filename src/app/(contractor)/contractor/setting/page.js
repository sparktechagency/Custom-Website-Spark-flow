'use client';
import ContractorChangePass from '@/Components/Contractor/ContractorChangePass';
import ContractorEmailPhone from '@/Components/Contractor/ContractorEmailPhone';
import React, { useState } from 'react';

const Page = () => {
    const [activeTab, setActiveTab] = useState('1');  // State to manage active tab

    const handleTabClick = (tab) => {
        setActiveTab(tab);  // Set the active tab on click
    };

    return (
        <div className="p-6 bg-gray-50 rounded-lg md:mx-0 mx-4">
            <h1 className="text-2xl font-semibold mb-4">Settings</h1>

            {/* Custom Tab Navigation */}
            <div className='grid grid-cols-1 md:grid-cols-6 '>
                <div className="flex md:col-span-1 flex-col border-b border-gray-300 mb-4">
                    <button
                        onClick={() => handleTabClick('1')}
                        className={`py-2 border-b-2 font-semibold cursor-pointer px-4 text-sm   ${activeTab === '1' ? ' border-[#203f9a] text-[#203f9a] bg-gray-200' : 'text-gray-600 hover:text-[#203f9a] border-gray-300'}`}
                    >
                        Change Password
                    </button>
                    <button
                        onClick={() => handleTabClick('2')}
                        className={`py-2 border-b-2 font-semibold cursor-pointer px-4 text-sm   ${activeTab === '2' ? ' border-[#203f9a] text-[#203f9a] bg-gray-200' : 'text-gray-600 hover:text-[#203f9a] border-gray-300'}`}
                    >
                        Update Email / Phone
                    </button>
                    <button
                        onClick={() => handleTabClick('3')}
                        className={`py-2 border-b-2 font-semibold cursor-pointer px-4 text-sm   ${activeTab === '3' ? ' border-[#203f9a] text-[#203f9a] bg-gray-200' : 'text-gray-600 hover:text-[#203f9a] border-gray-300'}`}
                    >
                        Notification Preferences
                    </button>
                </div>
                <div className='md:col-span-5'>
                    {/* Tab Content */}
                    {activeTab === '1' && (
                        <div className="space-y-4 p-5 bg-gray-200 rounded-r-xl rounded-bl-xl">
                            <ContractorChangePass />
                        </div>
                    )}
                    {activeTab === '2' && (
                        <div className="space-y-4 p-5 bg-gray-200 rounded-xl">
                            <ContractorEmailPhone />
                        </div>
                    )}
                    {activeTab === '3' && (
                        <div className="space-y-4 p-5 bg-gray-200 rounded-xl">
                            <h3 className="text-xl font-semibold">Notification Preferences</h3>
                            <p>
                                Manage your notification preferences and alerts.
                            </p>
                            {/* Add more content or form elements here */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;
