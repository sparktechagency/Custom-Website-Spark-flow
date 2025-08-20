import React, { useState } from 'react';
import icons from '@/icons/icon'; // assuming your icon import works correctly

const SubAllJobs = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false); // state to toggle the modal
    const [newJob, setNewJob] = useState({
        title: '',
        location: '',
        salary: '',
        vacancies: '',
        image: '',
    });

    // Job data for each category (no changes made here)
    const jobData = {
        All: [
            {
                title: 'Roofers',
                location: 'Patira, Dhaka - 1229 Bangladesh',
                salary: '$50 - $150/Day',
                vacancies: '10/12 Vacancy',
                image: 'https://www.obrien.com.au/wp-content/uploads/2021/12/A-Plumber-At-Work.jpg',
            },

        ],
        Roofers: [
            {
                title: 'Roofers',
                location: 'Patira, Dhaka - 1229 Bangladesh',
                salary: '$50 - $150/Day',
                vacancies: '10/12 Vacancy',
                image: 'https://scoutnetworkblog.com/wp-content/uploads/2018/11/Plumber-Sink-201709-003.jpg',
            },
        ],
        Glaziers: [
            {
                title: 'Glaziers',
                location: 'Patira, Dhaka - 1229 Bangladesh',
                salary: '$50 - $150/Day',
                vacancies: '10/12 Vacancy',
                image: 'https://scoutnetworkblog.com/wp-content/uploads/2018/11/Cleaning-Liquid-201806-001.jpg',
            },
        ],
        Painters: [
            {
                title: 'Painters',
                location: 'Patira, Dhaka - 1229 Bangladesh',
                salary: '$50 - $150/Day',
                vacancies: '10/12 Vacancy',
                image: 'https://scoutnetworkblog.com/wp-content/uploads/2018/11/Plumber-Sink-201709-003.jpg',
            },
        ],
        Plumber: [
            {
                title: 'Plumber',
                location: 'Patira, Dhaka - 1229 Bangladesh',
                salary: '$50 - $150/Day',
                vacancies: '10/12 Vacancy',
                image: 'https://www.obrien.com.au/wp-content/uploads/2021/12/A-Plumber-At-Work.jpg',
            },
        ],
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewJob((prevJob) => ({
            ...prevJob,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        // Add the new job to your jobData state (this is where you handle the actual job submission)
        console.log('New Job Added:', newJob);
        // Close the modal after submitting
        setIsModalOpen(false);
    };

    return (
        <div className="container mx-auto p-4">
            {/* Tabs */}
            <div className="mb-4 flex flex-wrap gap-3 justify-between items-center">
                <div className="tabs flex-wrap flex items-start space-x-4 space-y-2">
                    {['All', 'Roofers', 'Glaziers', 'Painters', 'Plumber'].map((tab) => (
                        <button
                            key={tab}
                            className={`tab-btn cursor-pointer ${activeTab === tab ? 'bg-[#203f9a] text-white' : 'bg-gray-200 text-black'} px-4 py-2 rounded-md`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => setIsModalOpen(true)} // Open modal when "Add Job" is clicked
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
                        <h2 className=" text-xl mt-4">{job.title}</h2>
                        <p className=" text-sm">{job.location}</p>
                        <p className=" text-sm">{job.salary}</p>
                        <p className=" text-sm">{job.vacancies}</p>
                        <div className="grid grid-cols-2 space-x-2 mt-4">
                            <button className="border border-[#203f9a] cursor-pointer text-[#203f9a]  px-4 py-2 rounded-md">See Details</button>
                            <button className="bg-[#203f9a] cursor-pointer text-white  px-4 py-2 rounded-md">Apply Now</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Add Job */}
            {isModalOpen && (
                <div onClick={() => setIsModalOpen(false)} className="fixed inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-50 flex justify-center items-center z-50">
                    <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-4">Add New Job</h2>
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
                        <div className='mb-4'>
                            <label className='block text-sm font-medium mb-2' htmlFor="image">Upload Image</label>
                            <div className='relative'>
                                <input
                                    type="file"
                                    name="image"
                                    className="w-full p-2 pl-10 border border-gray-300 rounded-md"
                                />
                                <span className='absolute top-2 left-2'>{icons.image}</span>
                            </div>
                        </div>
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
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Salary</label>
                            <input
                                type="text"
                                name="salary"
                                value={newJob.salary}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter salary range"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Vacancies</label>
                            <input
                                type="text"
                                name="vacancies"
                                value={newJob.vacancies}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter number of vacancies"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Job Image URL</label>
                            <input
                                type="text"
                                name="image"
                                value={newJob.image}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter image URL"
                            />
                        </div>
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
                                Add Job
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SubAllJobs;
