'use client';
import ContractorDashboard from '@/Components/Contractor/ContractorDashboard';
import icons from '@/icons/icon';
import React, { useState } from 'react';

const Page = () => {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState('dashboard');

    // Handler to set the active tab
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="">
            {/* Tab Navigation */}
            <div className="flex space-x-4 mb-4 border-b-2 border-gray-200">
                <button
                    onClick={() => handleTabChange('dashboard')}
                    className={`px-4 flex items-center gap-2 cursor-pointer font-bold py-2  ${activeTab === 'dashboard' ? 'bg-linear-to-b from-white to-blue-100 border-b-2 border-[#203f9a] text-[#203f9a]' : ''}`}
                >
                    {icons.dashboard} Dashboard
                </button>
                <button
                    onClick={() => handleTabChange('allJobs')}
                    className={`px-4 flex items-center gap-2 cursor-pointer font-bold py-2  ${activeTab === 'allJobs' ? 'bg-linear-to-b from-white to-blue-100 border-b-2 border-[#203f9a] text-[#203f9a]' : ''}`}
                >
                    {icons.job} All Jobs
                </button>
                <button
                    onClick={() => handleTabChange('jobRequest')}
                    className={`px-4 flex items-center gap-2 cursor-pointer font-bold py-2  ${activeTab === 'jobRequest' ? 'bg-linear-to-b from-white to-blue-100 border-b-2 border-[#203f9a] text-[#203f9a]' : ''}`}
                >
                    {icons.userAdd} Job Request
                </button>
                <button
                    onClick={() => handleTabChange('subcontractors')}
                    className={`px-4 flex items-center gap-2 cursor-pointer font-bold py-2  ${activeTab === 'subcontractors' ? 'bg-linear-to-b from-white to-blue-100 border-b-2 border-[#203f9a] text-[#203f9a]' : ''}`}
                >
                    {icons.subcontroctor} Subcontractors
                </button>
                <button
                    onClick={() => handleTabChange('reviews')}
                    className={`px-4 flex items-center gap-2 cursor-pointer font-bold py-2  ${activeTab === 'reviews' ? 'bg-linear-to-b from-white to-blue-100 border-b-2 border-[#203f9a] text-[#203f9a]' : ''}`}
                >
                    {icons.reviews} Reviews
                </button>
                <button
                    onClick={() => handleTabChange('subscription')}
                    className={`px-4 flex items-center gap-2 cursor-pointer font-bold py-2  ${activeTab === 'subscription' ? 'bg-linear-to-b from-white to-blue-100 border-b-2 border-[#203f9a] text-[#203f9a]' : ''}`}
                >
                    {icons.subscription} Subscription
                </button>
            </div>

            {/* Content based on Active Tab */}
            <div>
                {activeTab === 'dashboard' && <ContractorDashboard />}
                {activeTab === 'allJobs' && <div>All Jobs Content</div>}
                {activeTab === 'jobRequest' && <div>Job Request Content</div>}
                {activeTab === 'subcontractors' && <div>Subcontractors Content</div>}
                {activeTab === 'reviews' && <div>Reviews Content</div>}
                {activeTab === 'subscription' && <div>Subscription Content</div>}
            </div>
        </section>
    );
};

export default Page;
