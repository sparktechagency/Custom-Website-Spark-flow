

import React, { useState } from 'react';
import icons from '@/icons/icon'; // Assuming your icon import works correctly
import { message } from 'antd';
import Swal from 'sweetalert2';

const HouseWonerFindCOntractors = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false); // State for details modal
    const [selectedJob, setSelectedJob] = useState(null); // State to store selected job for details modal

    // Job data
    const jobData = {
        All: [
            {
                title: 'Roofers',
                location: 'Patira, Dhaka - 1229 Bangladesh',
                amount: '$50',
                vacancy: '10/12 Vacancy',
                description: "We are looking for experienced roofers to join our team.",
                image: 'https://www.obrien.com.au/wp-content/uploads/2021/12/A-Plumber-At-Work.jpg',
            },
        ],
        // Define other categories here...
    };




    const handleBook = (job) => {
        Swal.fire({
            title: 'Your Booking Successful!',
            text: 'The book feature is under development and will be available soon.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };


    // Open the details modal
    const handleDetails = (job) => {
        setSelectedJob(job);
        setIsDetailsModalOpen(true);
    };

    // Close the details modal
    const closeDetailsModal = () => {
        setIsDetailsModalOpen(false);
        setSelectedJob(null); // Reset the selected job
    };

    return (
        <div className="container mx-auto p-4">
            {/* Tabs */}
            <div className="mb-4 flex flex-wrap gap-3 justify-between items-center">
                <div className="tabs flex-wrap flex items-start space-x-4 space-y-2">
                    {['All', 'Roofers', 'Glaziers', 'Painters', 'Plumber'].map((tab) => (
                        <button
                            key={tab}
                            className={`tab-btn cursor-pointer ${activeTab === tab ? 'bg-[#203f9a] text-white' : 'bg-[#203f9a4b] text-black'} px-4 py-2 rounded-md`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

            </div>

            {/* Job Listings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {jobData[activeTab]?.map((job, index) => (
                    <div key={index} className="job-card border border-gray-200 p-4 rounded-lg shadow">
                        <img src={job.image} alt={job.title} className="w-full min-h-[200px] object-cover rounded-md" />
                        <h2 className="text-xl mt-4">{job.title}</h2>
                        <p className="text-sm">{job.location}</p>
                        <p className="text-sm">{job.amount}</p>
                        <p className="text-sm">{job.vacancy}</p>
                        <div className="flex space-x-2 justify-center mt-4">
                            <button onClick={() => handleDetails(job)} className="border border-[#203f9a] w-full cursor-pointer text-[#203f9a] px-4 py-2 rounded-md">See Details</button>
                            <button onClick={() => handleBook()} className="bg-[#203f9a] w-full cursor-pointer text-white px-4 py-2 rounded-md">Book</button>
                        </div>
                    </div>
                ))}
            </div>


            {/* Details Modal */}
            {isDetailsModalOpen && selectedJob && (
                <div onClick={closeDetailsModal} className="fixed inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-50 flex justify-center items-center z-50">
                    <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 rounded-lg shadow w-1/3">
                        <h2 className="text-xl font-semibold mb-4">Job Details</h2>
                        <img src={selectedJob.image} alt={selectedJob.title} className="w-full min-h-52 max-h-60 object-cover rounded-md mb-4" />
                        <p><strong>Title:</strong> {selectedJob.title}</p>
                        <p><strong>Location:</strong> {selectedJob.location}</p>
                        <p><strong>Amount:</strong> {selectedJob.amount}</p>
                        <p><strong>Vacancy:</strong> {selectedJob.vacancy}</p>
                        <p><strong>Description:</strong> {selectedJob.description}</p>

                        <div className="flex justify-end mt-4">
                            <button
                                onClick={closeDetailsModal}
                                className="bg-[#203f9a] cursor-pointer text-white px-4 py-2 rounded-md"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HouseWonerFindCOntractors;