import React from 'react';

const KeyFeatures = () => {
    return (
        <section id='key-features' className='container xl:px-0 px-5 py-8 md:py-12'>
            <div className='xl:w-1/2'>
                <h2 className='xl:text-5xl text-3xl font-bold mb-3 text-gray-900'>Key Features</h2>
                <p>Explore the powerful tools and features that help contractors find skilled subcontractors, manage projects, and get work done efficiently. Whether you're posting a job or searching for your next opportunity, we make it easy to connect, collaborate, and succeed.</p>
            </div>
            <div className='grid xl:grid-cols-2 gap-5 mt-10'>
                <div className='relative'>
                    <img className='relative h-[830px] w-full lg:h-[650px]' src="/Images/Home/keyfeaturesBG.png" alt="" />
                    <div className='absolute top-0 w-full left-0 p-10 '>
                        <h2 className='text-2xl font-bold text-gray-700 text-center mb-5'>Contractor Features</h2>
                        <div className='relative my-5'>
                            <img className='h-40 lg:h-28 w-full' src="/Images/Home/features-tems-bg.png" alt="" />
                            <div className='absolute top-0 left-0 p-5'>
                                <h3 className='text-xl font-bold text-gray-700 mb-1'>1. Post Jobs</h3>
                                <p className='text-gray-700 text-sm'>Easily post job opportunities by detailing project scope, required skills, and deadlines. Get your project up and running in no time.</p>
                            </div>
                        </div>
                        <div className='relative my-5'>
                            <img className='h-40 lg:h-28 w-full' src="/Images/Home/features-tems-bg.png" alt="" />
                            <div className='absolute top-0 left-0 p-5'>
                                <h3 className='text-xl font-bold text-gray-700 mb-1'>2. Manage Availability</h3>
                                <p className='text-gray-700 text-sm'>Manage your project timelines and contractor availability with ease. Coordinate project schedules without the hassle.</p>
                            </div>
                        </div>
                        <div className='relative my-5'>
                            <img className='h-40 lg:h-28 w-full' src="/Images/Home/features-tems-bg.png" alt="" />
                            <div className='absolute top-0 left-0 p-5'>
                                <h3 className='text-xl font-bold text-gray-700 mb-1'>3. Hire Subcontractors</h3>
                                <p className='text-gray-700 text-sm'>Find qualified subcontractors who meet your project needs. Hire them quickly and efficiently through our platform.</p>
                            </div>
                        </div>
                        <div className='relative my-5'>
                            <img className='h-40 lg:h-28 w-full' src="/Images/Home/features-tems-bg.png" alt="" />
                            <div className='absolute top-0 left-0 p-5'>
                                <h3 className='text-xl font-bold text-gray-700 mb-1'>4. Track Project Progress</h3>
                                <p className='text-gray-700 text-sm'>Monitor the progress of your projects in real-time. Get updates and keep everything on track from start to finish.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img className='relative h-[830px] w-full lg:h-[650px]' src="/Images/Home/keyfeaturesBG.png" alt="" />
                    <div className='absolute top-0 w-full left-0 p-10 '>
                        <h2 className='text-2xl font-bold text-gray-700 text-center mb-5'>Subcontractor Features</h2>
                        <div className='relative my-5'>
                            <img className='h-40 lg:h-28 w-full' src="/Images/Home/features-tems-bg.png" alt="" />
                            <div className='absolute top-0 left-0 p-5'>
                                <h3 className='text-xl font-bold text-gray-700 mb-1'>1. Browse Job Opportunities</h3>
                                <p className='text-gray-700 text-sm'>Easily post job opportunities by detailing project scope, required skills, and deadlines. Get your project up and running in no time.</p>
                            </div>
                        </div>
                        <div className='relative my-5'>
                            <img className='h-40 lg:h-30 w-full' src="/Images/Home/features-tems-bg.png" alt="" />
                            <div className='absolute top-0 left-0 p-5'>
                                <h3 className='text-xl font-bold text-gray-700 mb-1'>2. Set Your Availability</h3>
                                <p className='text-gray-700 text-sm'>Let contractors know when you’re available to work. Set your preferred hours and take control of your schedule. Let contractors know when you’re available to work. Set your preferred hours and take control of your schedule.</p>
                            </div>
                        </div>
                        <div className='relative my-5'>
                            <img className='h-40 lg:h-28 w-full' src="/Images/Home/features-tems-bg.png" alt="" />
                            <div className='absolute top-0 left-0 p-5'>
                                <h3 className='text-xl font-bold text-gray-700 mb-1'>3. Hire Subcontractors</h3>
                                <p className='text-gray-700 text-sm'>Apply for jobs with a single click. Send your profile and experience directly to contractors and start new opportunities.</p>
                            </div>
                        </div>
                        <div className='relative my-5'>
                            <img className='h-40 lg:h-28 w-full' src="/Images/Home/features-tems-bg.png" alt="" />
                            <div className='absolute top-0 left-0 p-5'>
                                <h3 className='text-xl font-bold text-gray-700 mb-1'>4. Showcase Your Skills</h3>
                                <p className='text-gray-700 text-sm'>Highlight your expertise by showcasing your portfolio, reviews, and past projects. Stand out to contractors looking for skilled professionals.</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

        </section>
    );
}

export default KeyFeatures;
