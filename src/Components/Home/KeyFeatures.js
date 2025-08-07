import React from 'react';

const KeyFeatures = () => {
    return (
        <section className='container xl:px-0 px-5 py-8 md:py-12'>
            <div className='xl:w-1/2'>
                <h2 className='xl:text-5xl text-3xl font-bold mb-3 text-gray-900'>Key Features</h2>
                <p>Explore the powerful tools and features that help contractors find skilled subcontractors, manage projects, and get work done efficiently. Whether you're posting a job or searching for your next opportunity, we make it easy to connect, collaborate, and succeed.</p>
            </div>
            <div className='grid xl:grid-cols-2 gap-5 mt-10'>
                <div className='relative'>
                    <img className='relative' src="/Images/Home/keyfeaturesBG.png" alt="" />
                    <div className='absolute top-0 w-full left-0 p-10 '>
                        <h2 className='text-2xl font-bold text-gray-700 text-center mb-5'>Contractor Features</h2>
                        <div className='bg-[url("/Images/Home/features-tems-bg.png")] bg-no-repeat object-fill bg-contain  !min-h-48 py-3 px-5'>
                            <h3 className='text-xl font-bold text-gray-700 mb-1'>1. Post Jobs</h3>
                            <p className='text-gray-700 text-sm'>Easily post job opportunities by detailing project scope, required skills, and deadlines. Get your project up and running in no time.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-bold text-gray-700 text-center'>Subcontractor Features</h2>
                </div>
            </div>

        </section>
    );
}

export default KeyFeatures;
