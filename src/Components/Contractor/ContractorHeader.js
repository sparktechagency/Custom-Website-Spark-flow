'use client';
import icons from '@/icons/icon';
import Link from 'next/link';
import React, { useState } from 'react';

const ContractorHeader = () => {

    const [showUser, setShowUser] = useState(false);
    const handleSowUser = () => {
        setShowUser(!showUser);
        console.log('show user');
    }

    return (
        <header className=' flex flex-wrap gap-5 items-center justify-center md:justify-between py-5'>
            <div className='flex items-center gap-5'>
                <Link href={'/contractor'} >
                    <img className='w-12' src="/Images/Home/logo.png" alt="" />
                </Link>
                <div className='relative border border-[#203f9a] rounded-md'>
                    <input className='px-4 py-2 ring-0 focus:border-0 outline-[#203f9a] min-w-80 md:w-96' type="text" placeholder='What are you looking for?' />
                    <button className='absolute bg-[#203f9a] cursor-pointer text-white right-0 rounded-r-md py-1 px-3  top-0 bottom-0'>{icons.search}</button>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <select className='px-4 py-2 border border-[#203f9a] rounded-md ring-[#203f9a] focus:border-[#203f9a] outline-[#203f9a]' name="category" id="">
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                    <option value="category3">Category 4</option>
                </select>
                <Link href="/contractor/message" className='cursor-pointer px-2 relative text-white py-2 border bg-[#203f9a] rounded-md'>
                    {icons.message}
                    <span className='absolute top-2 right-2 bg-red-600 w-2 h-2 rounded-full'></span>
                </Link>
                <Link href="/contractor/notifications" className='cursor-pointer px-2 relative text-white py-2 border bg-[#203f9a] rounded-md'>
                    {icons.notification}
                    <span className='absolute top-2 right-2 bg-red-600 w-2 h-2 rounded-full'></span>
                </Link>
                <div className='relative'>
                    <img onClick={handleSowUser} className='w-12 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s" alt="" />
                    {
                        showUser &&
                        <div className='absolute border border-gray-300 z-10 top-14 min-w-[300px] right-0 px-2 py-5 bg-gray-100 rounded-lg'>
                            <img className='w-28 mx-auto rounded-lg' src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-1/515436369_2512866372423820_6912327461078916818_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeE9lRhKqnIY288VL7I5LwZeFE9LNyGOjeIUT0s3IY6N4nfN6ROk4lNH8befPQzCdvkzOix1chgKD38atiuJjXJT&_nc_ohc=uYCWSOwCa2MQ7kNvwF-WKrB&_nc_oc=AdncIJwN00FZiI1yECBVztXgKQVqPp6z9iM4GfbCGbCbUONDZPgafAXzkHOc-baFoQk&_nc_zt=24&_nc_ht=scontent.fdac24-5.fna&_nc_gid=6EIrkGUjxPpVyjoGL_tbfg&oh=00_AfVEd3Y6Oj7eNKfSKqNcGRi2qkKrMPRyZvbt48gTSozq1A&oe=68A0DE60" alt="" />
                            <h2 className='text-center mt-2 text-2xl capitalize font-semibold'>nimur rahman nerob</h2>
                            <h3 className='text-center text-[#203f9a] font-semibold'>Contractor</h3>
                            <div className='bg-white mt-5 font-semibold py-2 px-5 rounded-lg flex flex-col gap-2 '>
                                <Link onClick={handleSowUser} href={'/contractor/profile'} className='flex items-center gap-2 hover:text-[#203f9a] py-2 cursor-pointer border-b border-gray-300'>
                                    <img className='w-6 rounded-full' src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-1/515436369_2512866372423820_6912327461078916818_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeE9lRhKqnIY288VL7I5LwZeFE9LNyGOjeIUT0s3IY6N4nfN6ROk4lNH8befPQzCdvkzOix1chgKD38atiuJjXJT&_nc_ohc=uYCWSOwCa2MQ7kNvwF-WKrB&_nc_oc=AdncIJwN00FZiI1yECBVztXgKQVqPp6z9iM4GfbCGbCbUONDZPgafAXzkHOc-baFoQk&_nc_zt=24&_nc_ht=scontent.fdac24-5.fna&_nc_gid=6EIrkGUjxPpVyjoGL_tbfg&oh=00_AfVEd3Y6Oj7eNKfSKqNcGRi2qkKrMPRyZvbt48gTSozq1A&oe=68A0DE60" alt="" />
                                    <span>Profile</span>
                                </Link>
                                {/* setting  */}
                                <Link onClick={handleSowUser} href={'/contractor/setting'} className='flex items-center gap-2 hover:text-[#203f9a] py-2 cursor-pointer border-b border-gray-300'>
                                    <span>{icons.setting}</span>
                                    <span>Setting</span>
                                </Link>
                                <Link onClick={handleSowUser} href={'/contractor/terms-privacy'} className='flex items-center gap-2 hover:text-[#203f9a] py-2 cursor-pointer border-b border-gray-300'>
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

export default ContractorHeader;
