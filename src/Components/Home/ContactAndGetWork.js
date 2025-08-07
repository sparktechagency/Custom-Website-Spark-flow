import React from 'react';

const ContactAndGetWork = () => {
    return (
        <div className='container xl:px-0 px-5 py-8 md:py-12 grid xl:grid-cols-2 items-center gap-5'>
            <div className=''>
                <img className='xl:w-2/3 w-full' src="/Images/Home/contact-get-to-work.png" alt="" />
            </div>
            <div> 
                <div className='my-8'>
                    <h3 className='text-2xl font-semibold mb-3 text-gray-900'>Step 3: Connect and Get to Work</h3>
                    <p className='text-lg text-gray-700'>Once you’ve found the right opportunity or candidate, it’s time to connect! Contractors and subcontractors can message each other directly, discuss project details, and negotiate terms. Once both parties are in agreement, get to work and start building!</p>
                </div>
                <div className='my-8'>
                    <ul className='list-disc text-lg text-gray-700 ml-5'>
                        <li>For Contractors: Directly message subcontractors to discuss details and finalize agreements.</li>
                        <li>For Subcontractors: Reach out to contractors for clarification, confirm job specifics, and confirm your availability.</li>
                        <li>Once connected, start working on your project—whether it’s construction, remodeling, or another specialized field.</li>
                        <li>Manage your availability through the platform.</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default ContactAndGetWork;
