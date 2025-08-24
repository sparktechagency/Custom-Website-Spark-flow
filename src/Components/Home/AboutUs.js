import React from 'react';

const AboutUs = () => {
    return (
        <section id='about-us' className='container xl:px-0 px-5 py-8 md:py-12 grid xl:grid-cols-2 items-center gap-5'>
            <div className='order-2 xl:order-1'>
                <h3 className='text-6xl font-bold mb-5 text-gray-900'>About Us</h3>
                <h2 className='text-xl text-gray-600'>Building Stronger Teams, One Project at a Time</h2>
                <div className='my-8'>
                    <h3 className='text-2xl font-semibold mb-3 text-gray-900'>Who We Are</h3>
                    <p className='text-lg text-gray-700'>We are a passionate team of builders and industry professionals who understand the daily challenges of finding dependable partners in the remodeling world. From roofing to siding, windows to gutters — we’ve created a platform that brings the right people together to get the job done right.</p>
                </div>
                <div className='my-8'>
                    <h3 className='text-2xl font-semibold mb-3 text-gray-900'>Our Mission</h3>
                    <p className='text-lg text-gray-700'>To simplify how contractors and subcontractors find each other, manage work, and build lasting professional relationships — all in one secure and easy-to-use platform.</p>
                </div>
            </div>
            <div className='flex xl:order-2 order-1 justify-end'>
                <img className='xl:w-2/3 w-full' src="/Images/Home/about-us.png" alt="" />
            </div>
        </section>
    );
}

export default AboutUs;
