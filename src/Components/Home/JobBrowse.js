import React from 'react';

const JobBrowse = () => {
    return (
        <div className='container xl:px-0 px-5 py-8 md:py-12 grid xl:grid-cols-2 items-center gap-5'>
            <div className='order-2 xl:order-1'>

                <div className='my-8'>
                    <h3 className='text-2xl font-semibold mb-3 text-gray-900'>Step 2: Browse Jobs or Post Opportunities</h3>
                    <p className='text-lg text-gray-700'>Now that your profile is set, you can start exploring! Contractors can post job openings and manage their project listings. Subcontractors can browse through the available jobs and filter by project type, skill set, and location.</p>
                </div>
                <div className='my-8'>
                    <ul className='list-disc text-lg text-gray-700 ml-5'>
                        <li>Choose your role: Contractor or Subcontractor</li>
                        <li>Add your professional details (skills, availability, certifications, etc.)</li>
                        <li>Upload relevant documents (if necessary: certifications, portfolio, etc.)</li>
                        <li>Set your location and preferences</li>
                    </ul>
                </div>
            </div>
            <div className='flex xl:order-2 order-1 justify-end'>
                <img className='xl:w-2/3 w-full' src="/Images/Home/job-browser.png" alt="" />
            </div>
        </div>
    );
}

export default JobBrowse;
