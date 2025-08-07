import React from 'react';

const Hero = () => {
    return (
        <div>
            <section className='container lx:px-0 px-5 grid xl:grid-cols-2 items-center xl:gap-4'>
                <div className="relative bg-cover bg-center min-h-[60vh]  bg-no-repeat">
                    <img className='w-full' src="/Images/Home/hero-banner.png" alt="" />
                    <div className='absolute top-0 left-0 xl:p-10 p-5 w-full h-full flex items-start xl:justify-center xl:mt-0 mt-8 flex-col'>
                        <h3 className='xl:text-5xl leading-[1.3] font-bold text-gray-800'>Connecting Contractors With <br />
                            Skilled Subcontractors</h3>
                        <p className='xl:my-5 my-3 xl:text-xl text-gray-500 font-semibold'>Find qualified subcontractors or post job opportunities in the remodeling industry. Seamless, efficient, and trustworthy</p>
                        <div className='flex gap-4'>
                            <button className=' cursor-pointer xl:w-72 text-white '>
                                <img className='hover:opacity-80' src="/Images/Home/get-start.png" alt="" />
                            </button>
                            <button className=' cursor-pointer xl:w-72 text-white'>
                                <img src="/Images/Home/contact-us.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex items-center xl:justify-end justify-center'>
                    <img className='lg:w-4/6' src="/Images/Home/Constructionworker-pana1.png" alt="" />
                </div>
            </section>
        </div>
    );
}

export default Hero;
