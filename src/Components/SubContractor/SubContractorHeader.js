'use client';
import icons from '@/icons/icon';
import Link from 'next/link';
import React, { useState } from 'react';

const SubContractorHeader = () => {

    const [showUser, setShowUser] = useState(false);
    const handleSowUser = () => {
        setShowUser(!showUser);
        console.log('show user');
    }

    return (
        <header className=' flex flex-wrap gap-5 items-center justify-center md:justify-between py-5'>
            <div className='flex items-center gap-5'>
                <Link href={'/sub-contractor'} >
                    <img className='w-12' src="/Images/Home/logo.png" alt="" />
                </Link>
                <div className='relative border border-[#ded317] rounded-md'>
                    <input className='px-4 py-2 ring-0 focus:border-0 outline-[#ded317] min-w-80 md:w-96' type="text" placeholder='What are you looking for?' />
                    <button className='absolute bg-[#ded317] cursor-pointer text-white right-0 rounded-r-md py-1 px-3  top-0 bottom-0'>{icons.search}</button>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <select className='px-4 py-2 border border-[#ded317] rounded-md ring-[#ded317] focus:border-[#ded317] outline-[#ded317]' name="category" id="">
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                    <option value="category3">Category 4</option>
                </select>
                <Link href="/sub-contractor/message" className='cursor-pointer px-2 relative text-white py-2 border bg-[#ded317] rounded-md'>
                    {icons.message}
                    <span className='absolute top-2 right-2 bg-red-600 w-2 h-2 rounded-full'></span>
                </Link>
                <Link href="/sub-contractor/notifications" className='cursor-pointer px-2 relative text-white py-2 border bg-[#ded317] rounded-md'>
                    {icons.notification}
                    <span className='absolute top-2 right-2 bg-red-600 w-2 h-2 rounded-full'></span>
                </Link>
                <div className='relative'>
                    <img onClick={handleSowUser} className='w-12 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s" alt="" />
                    {
                        showUser &&
                        <div className='absolute border border-gray-300 z-10 top-14 min-w-[300px] right-0 px-2 py-5 bg-gray-100 rounded-lg'>
                            <img className='w-28 mx-auto rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s" alt="" />
                            <h2 className='text-center mt-2 text-2xl capitalize font-semibold'>nimur rahman nerob</h2>
                            <h3 className='text-center text-[#ded317] font-semibold'>sub-contractor</h3>
                            <div className='bg-white mt-5 font-semibold py-2 px-5 rounded-lg flex flex-col gap-2 '>
                                <Link onClick={handleSowUser} href={'/sub-contractor/profile'} className='flex items-center gap-2 hover:text-[#ded317] py-2 cursor-pointer border-b border-gray-300'>
                                    <img className='w-6 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s" alt="" />
                                    <span>Profile</span>
                                </Link>
                                {/* setting  */}
                                <Link onClick={handleSowUser} href={'/sub-contractor/setting'} className='flex items-center gap-2 hover:text-[#ded317] py-2 cursor-pointer border-b border-gray-300'>
                                    <span>{icons.setting}</span>
                                    <span>Setting</span>
                                </Link>
                                <Link onClick={handleSowUser} href={'/sub-contractor/terms-privacy'} className='flex items-center gap-2 hover:text-[#ded317] py-2 cursor-pointer border-b border-gray-300'>
                                    <span>{icons.termsAndPrivacy}</span>
                                    <span>Terms & Privacy </span>
                                </Link>
                                {/* logout  */}
                                <Link onClick={handleSowUser} href={'/'} className='flex items-center justify-center gap-2 text-[#ff0000] hover:text-[#c00202] py-2 cursor-pointer'>
                                    <span>{icons.logout}</span>
                                    <span>Logout</span>
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </header>
    );
}

export default SubContractorHeader;
