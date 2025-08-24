import React from 'react';

const HowItWork = () => {
    return (
        <section id='how-it-works' className='container xl:px-0 px-5 py-8 md:py-12 grid xl:grid-cols-2 items-center gap-5'>
            <div className=''>
                <img className='xl:w-2/3 w-full' src="/Images/Home/howitwork.png" alt="" />
            </div>
            <div>
                <h3 className='text-6xl font-bold mb-5 text-gray-900'>How It Works</h3> 
                <div className='my-8'>
                    <h3 className='text-2xl font-semibold mb-3 text-gray-900'>Step 1: Create Your Profile</h3>
                    <p className='text-lg text-gray-700'>Getting started is quick and easy. Sign up and create your profile in just a few minutes. Whether you're a contractor looking to post jobs or a subcontractor seeking opportunities, your profile helps match you with the right opportunities..</p>
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

        </section>
    );
}

export default HowItWork;
