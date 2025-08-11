import icons from '@/icons/icon';
import Link from 'next/link';
import React from 'react';

const ContractorHeader = () => {
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
                <Link href="/contractor/message" className='cursor-pointer px-2 text-white py-2 border bg-[#203f9a] rounded-md'>{icons.message}</Link>
                <Link href="/contractor/notifications" className='cursor-pointer px-2 text-white py-2 border bg-[#203f9a] rounded-md'>{icons.notification}</Link>
                <Link href="/contractor/profile">
                    <img className='w-12 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s" alt="" />
                </Link>
            </div>
        </header>
    );
}

export default ContractorHeader;
