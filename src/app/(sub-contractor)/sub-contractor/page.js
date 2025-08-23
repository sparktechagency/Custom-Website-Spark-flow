'use client';
import AllJobs from '@/Components/Contractor/SubAllJobs';
import ContractorDashboard from '@/Components/Contractor/ContractorDashboard';
import JobRequest from '@/Components/Contractor/ContractorJobRequest ';
import ContractorReciews from '@/Components/Contractor/ContractorReciews';
import Subcontractors from '@/Components/Contractor/ContractorSubcontractors';
import ContractorSubscription from '@/Components/Contractor/ContractorSubscription';
import SubContractorDashboard from '@/Components/SubContractor/SubContractorDashboard';
import icons from '@/icons/icon';
import React, { useState } from 'react';
import SubAllJobs from '@/Components/Contractor/SubAllJobs';
import SubContractorJobRequest from '@/Components/SubContractor/SubContractorJobRequest ';

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
            <div className="flex space-x-4 flex-wrap mb-4 border-b-2 border-[#ded41754]">
                <button
                    onClick={() => handleTabChange('dashboard')}
                    className={`px-4 flex items-center gap-2 cursor-pointer font-bold py-2  ${activeTab === 'dashboard' ? 'bg-linear-to-b from-white to-[#ded41741] border-b-2 border-[#ded317] text-[#ded317]' : ''}`}
                >
                    {icons.dashboard} Dashboard
                </button>

                <button
                    onClick={() => handleTabChange('jobRequest')}
                    className={`px-4 flex items-center gap-2 cursor-pointer font-bold py-2  ${activeTab === 'jobRequest' ? 'bg-linear-to-b from-white to-[#ded41741] border-b-2 border-[#ded317] text-[#ded317]' : ''}`}
                >
                    {icons.job} Your Jobs
                </button>

                <button
                    onClick={() => handleTabChange('allJobs')}
                    className={`px-4 flex items-center gap-2 cursor-pointer font-bold py-2  ${activeTab === 'allJobs' ? 'bg-linear-to-b from-white to-[#ded41741] border-b-2 border-[#ded317] text-[#ded317]' : ''}`}
                >
                    {icons.findJobs} Find Jobs
                </button>

                {/* <button
                    onClick={() => handleTabChange('subcontractors')}
                    className={`px-4 flex items-center gap-2 cursor-pointer font-bold py-2  ${activeTab === 'subcontractors' ? 'bg-linear-to-b from-white to-[#ded41741] border-b-2 border-[#ded317] text-[#ded317]' : ''}`}
                >
                    {icons.subcontroctor} Subcontractors
                </button> */}
                <button
                    onClick={() => handleTabChange('reviews')}
                    className={`px-4 flex items-center gap-2 cursor-pointer font-bold py-2  ${activeTab === 'reviews' ? 'bg-linear-to-b from-white to-[#ded41741] border-b-2 border-[#ded317] text-[#ded317]' : ''}`}
                >
                    {icons.reviews} Reviews
                </button>
                <button
                    onClick={() => handleTabChange('subscription')}
                    className={`px-4 flex items-center gap-2 cursor-pointer font-bold py-2  ${activeTab === 'subscription' ? 'bg-linear-to-b from-white to-[#ded41741] border-b-2 border-[#ded317] text-[#ded317]' : ''}`}
                >
                    {icons.subscription} Subscription
                </button>
            </div>

            {/* Content based on Active Tab */}
            <div>
                {activeTab === 'dashboard' && <SubContractorDashboard />}
                {activeTab === 'allJobs' && <SubAllJobs />}
                {activeTab === 'jobRequest' && <SubContractorJobRequest />}
                {activeTab === 'subcontractors' && <Subcontractors />}
                {activeTab === 'reviews' && <ContractorReciews />}
                {activeTab === 'subscription' && <ContractorSubscription />}
            </div>
        </section>
    );
};

export default Page;
