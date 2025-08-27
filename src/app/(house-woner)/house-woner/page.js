'use client';
// import AllJobs from '@/Components/Contractor/SubAllJobs';
import ContractorDashboard from '@/Components/Contractor/ContractorDashboard';
import JobRequest from '@/Components/Contractor/ContractorJobRequest ';
import ContractorReciews from '@/Components/Contractor/ContractorReciews';
import Subcontractors from '@/Components/Contractor/ContractorSubcontractors';
import ContractorSubscription from '@/Components/Contractor/ContractorSubscription';
import SubContractorDashboard from '@/Components/SubContractor/SubContractorDashboard';
import icons from '@/icons/icon';
import React, { useState } from 'react';
// import SubAllJobs from '@/Components/Contractor/SubAllJobs';
import SubContractorJobRequest from '@/Components/SubContractor/SubContractorJobRequest ';
import HouseWonerDashboard from '@/Components/HouseWoner/HouseWonerDashboard';
import HouseWonerFindCOntractors from '@/Components/HouseWoner/HouseWonerFindCOntractors';
import HouseWonerFindSubContractors from '@/Components/HouseWoner/HouseWonerFindSubContractors';
import HouseWonerReviews from '@/Components/HouseWoner/HouseWonerReviews';
import HouseWonerSubscription from '@/Components/HouseWoner/HouseWonerSubscription';

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
            <div className="flex space-x-4 flex-wrap mb-4 border-b-2 border-gray-200">
                <button
                    onClick={() => handleTabChange('dashboard')}
                    className={`px-4 flex items-center gap-2 cursor-pointer font-bold py-2  ${activeTab === 'dashboard' ? 'bg-linear-to-b from-white to-blue-100 border-b-2 border-[#203f9a] text-[#203f9a]' : ''}`}
                >
                    {icons.dashboard} Dashboard
                </button>

                <button
                    onClick={() => handleTabChange('findContractors')}
                    className={`px-4 flex items-center gap-2 cursor-pointer font-bold py-2  ${activeTab === 'findContractors' ? 'bg-linear-to-b from-white to-blue-100 border-b-2 border-[#203f9a] text-[#203f9a]' : ''}`}
                >
                    {icons.job} Find Contractors
                </button>

                <button
                    onClick={() => handleTabChange('findSubContractors')}
                    className={`px-4 flex items-center gap-2 cursor-pointer font-bold py-2  ${activeTab === 'findSubContractors' ? 'bg-linear-to-b from-white to-blue-100 border-b-2 border-[#203f9a] text-[#203f9a]' : ''}`}
                >
                    {icons.findJobs}  Find Sub-Contractors
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
                {activeTab === 'dashboard' && <HouseWonerDashboard />}
                {activeTab === 'findContractors' && <HouseWonerFindCOntractors />}
                {activeTab === 'findSubContractors' && <HouseWonerFindSubContractors />}
                {activeTab === 'reviews' && <HouseWonerReviews />}
                {activeTab === 'subscription' && <HouseWonerSubscription />}
            </div>
        </section>
    );
};

export default Page;
