
import React from 'react';

const Page = () => {
    return (
        <section className='container grid grid-cols-2 gap-4'>
            <div className="relative bg-cover bg-center min-h-[60vh]  bg-no-repeat">
                <img className='w-full' src="/Images/Home/hero-banner.png" alt="" />
                <div className='absolute top-0 left-0 p-10 w-full h-full flex items-start justify-center flex-col'>
                    <h3 className='text-5xl leading-[1.3] font-bold'>Connecting Contractors With <br />
                        Skilled Subcontractors</h3>
                    <p className='my-5 text-xl'>Find qualified subcontractors or post job opportunities in the remodeling industry. Seamless, efficient, and trustworthy</p>
                    <div className='flex gap-4'>
                        <button className=' cursor-pointer w-72 text-white '>
                            <img className='hover:opacity-80' src="/Images/Home/get-start.png" alt="" />
                        </button>
                        <button className=' cursor-pointer w-72 text-white'>
                            <img src="/Images/Home/contact-us.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </section>
    );
}

export default Page;
