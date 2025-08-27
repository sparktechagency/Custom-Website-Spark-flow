import React, { useState } from 'react';
import icons from '@/icons/icon'; // Assuming your icon import works correctly
import { message } from 'antd';
import Swal from 'sweetalert2';

const AllJobs = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false); // State for details modal
    const [newJob, setNewJob] = useState({
        title: '',
        location: '',
        vacancy: '',
        amount: '',
        description: '',
        image: '',
    });
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

    // Handle changes in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewJob((prevJob) => ({
            ...prevJob,
            [name]: value,
        }));
    };

    // Handle job form submission
    const handleSubmit = () => {
        console.log('New Job Added:', newJob);

        // Add new job to the selected tab
        jobData[activeTab].push(newJob);

        // Reset the newJob state after adding
        setNewJob({
            title: '',
            location: '',
            vacancy: '',
            amount: '',
            description: '',
            image: '',
        });

        // Close modal after submitting
        setIsModalOpen(false);
    };

    // Handle modal mood for editing jobs
    const [modalMood, setModalMood] = useState('add');

    const handleEdit = (job) => {
        setModalMood('edit');
        setNewJob(job); // Populate the form with the job data
        setIsModalOpen(true);
    };

    // Handle job deletion
    const handleDelete = (jobIndex) => {

        const updatedJobs = jobData[activeTab].filter((_, index) => index !== jobIndex);
        jobData[activeTab] = updatedJobs;
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });


    };

    // Handle image preview
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewJob((prevJob) => ({
                    ...prevJob,
                    image: reader.result, // Set base64 encoded image as the job image
                }));
            };
            reader.readAsDataURL(file);
        }
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
                <button
                    onClick={() => {
                        setModalMood('add'); // Reset modal mood to 'add' when creating new job
                        setNewJob({ // Reset the job data before opening modal
                            title: '',
                            location: '',
                            vacancy: '',
                            amount: '',
                            description: '',
                            image: '',
                        });
                        setIsModalOpen(true);
                    }} // Open modal
                    className="flex items-center gap-3 cursor-pointer border-2 border-[#203f9a] text-[#203f9a] font-semibold px-4 py-2 rounded-md"
                >
                    {icons.add} Add New
                </button>
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
                            <button onClick={() => handleDelete(index)} className="bg-red-600 w-full cursor-pointer text-white px-4 py-2 rounded-md">Delete</button>
                            <button onClick={() => handleEdit(job)} className="bg-gray-200 w-full cursor-pointer text-black px-4 py-2 rounded-md">Edit</button>
                            <button onClick={() => handleDetails(job)} className="bg-[#203f9a] w-full cursor-pointer text-white px-4 py-2 rounded-md">See Details</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Add/Edit Job */}
            {isModalOpen && (
                <div onClick={() => setIsModalOpen(false)} className="fixed inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-50 flex justify-center items-center z-50">
                    <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 lg:w-[500px] rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-4">{modalMood === 'add' ? 'Add New Job' : 'Edit Job'}</h2>

                        {/* Job Title */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Job Title</label>
                            <input
                                type="text"
                                name="title"
                                value={newJob.title}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter job title"
                            />
                        </div>

                        {/* Vacancy */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Vacancy</label>
                            <input
                                type="text"
                                name="vacancy"
                                value={newJob.vacancy}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter vacancy"
                            />
                        </div>

                        {/* Location */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Location</label>
                            <input
                                type="text"
                                name="location"
                                value={newJob.location}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter location"
                            />
                        </div>

                        {/* Amount */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Amount</label>
                            <input
                                type="text"
                                name="amount"
                                value={newJob.amount}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter amount"
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Description</label>
                            <textarea
                                name="description"
                                value={newJob.description}
                                onChange={handleChange}
                                rows={4}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter job description"
                            />
                        </div>

                        {/* Image Upload */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="image">Upload Image</label>
                            <div className="relative">
                                <input
                                    type="file"
                                    name="image"
                                    className="w-full p-2 pl-10 border border-gray-300 rounded-md"
                                    onChange={handleImageUpload}
                                />
                                <span className="absolute top-2 left-2">{icons.image}</span>
                            </div>
                            {newJob.image && (
                                <img src={newJob.image} alt="Job" className="w-full h-40 object-cover rounded-md my-2" />
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={() => setIsModalOpen(false)} // Close modal without adding a job
                                className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-md"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit} // Submit the new job
                                className="bg-[#203f9a] cursor-pointer text-white px-4 py-2 rounded-md"
                            >
                                {modalMood === 'add' ? 'Add Job' : 'Update Job'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

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

export default AllJobs;