'use client';
import icons from '@/icons/icon';
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
    const [activeTab, setActiveTab] = useState('1');  // State to manage active tab

    const handleTabClick = (tab) => {
        setActiveTab(tab);  // Set the active tab on click
    };

    return (
        <div className="p-6 bg-gray-50 rounded-lg mx-4 md:mx-0">
            <Link href="/" className="text-2xl font-semibold mb-5 flex items-center gap-3">{icons.left} Terms & Privacy</Link>

            {/* Custom Tab Navigation */}
            <div className='w-full md:flex items-start gap-5 '>
                <div className="flex min-w-48 flex-col items-start border-gray-300 mb-4">
                    <button
                        onClick={() => handleTabClick('1')}
                        className={`py-2 w-full px-4 border-b-2 border-gray-200 cursor-pointer text-lg font-medium ${activeTab === '1' ? 'border-b-[#ded317] bg-[#ded41759] text-[#ded317]' : 'text-gray-600 hover:text-[#ded317]'}`}
                    >
                        Terms of Service
                    </button>
                    <button
                        onClick={() => handleTabClick('2')}
                        className={`py-2 px-4 w-full text-lg border-b-2 border-gray-200 cursor-pointer font-medium ${activeTab === '2' ? 'border-b-[#ded317] bg-[#ded41759] text-[#ded317]' : 'text-gray-600 hover:text-[#ded317]'}`}
                    >
                        Privacy Policy
                    </button>
                </div>
                <div>
                    {/* Tab Content */}
                    {activeTab === '1' && (
                        <div className="border-2 border-gray-100 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold my-3">Terms of Service</h3>
                            <p>
                                These are the terms of service for using our platform. Please read them carefully before proceeding. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at minima nemo necessitatibus suscipit, ipsum molestiae natus ratione ipsam enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam quae eos recusandae illum quaerat? Lorem ipsum, dolor sit amet consectetur adipisicing elit. A accusantium explicabo officiis at perferendis earum eveniet voluptatem laborum sed aspernatur quidem suscipit eum id voluptatum, ratione dicta provident laboriosam fuga.
                            </p>
                            <h3 className="text-xl font-semibold my-3">Terms of Service</h3>
                            <p>
                                These are the terms of service for using our platform. Please read them carefully before proceeding. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at minima nemo necessitatibus suscipit, ipsum molestiae natus ratione ipsam enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam quae eos recusandae illum quaerat? Lorem ipsum, dolor sit amet consectetur adipisicing elit. A accusantium explicabo officiis at perferendis earum eveniet voluptatem laborum sed aspernatur quidem suscipit eum id voluptatum, ratione dicta provident laboriosam fuga.
                            </p>
                            {/* Add more content here */}
                        </div>
                    )}
                    {activeTab === '2' && (
                        <div className="border-2 border-gray-100 p-5 rounded-lg">
                            <h3 className="text-xl font-semibold my-3">Privacy Policy</h3>
                            <p>
                                These are the terms of service for using our platform. Please read them carefully before proceeding. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at minima nemo necessitatibus su voluptatum, ratione dicta provident laboriosam fuga.
                                These are the terms of service for using our platform. Please read them carefully before proceeding. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at minima nemo necessitatibus su voluptatum, ratione dicta provident laboriosam fuga.
                                These are the terms of service for using our platform. Please read them carefully before proceeding. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at minima nemo necessitatibus su voluptatum, ratione dicta provident laboriosam fuga.
                            </p>
                            <h3 className="text-xl font-semibold my-3">Privacy Policy</h3>
                            <p>
                                These are the terms of service for using our platform. Please read them carefully before proceeding. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at minima nemo necessitatibus suscipit, ipsum molestiae natus ratione ipsam enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam quae eos recusandae illum quaerat? Lorem ipsum, dolor sit amet consectetur adipisicing elit. A accusantium explicabo officiis at perferendis earum eveniet voluptatem laborum sed aspernatur quidem suscipit eum id voluptatum, ratione dicta provident laboriosam fuga.
                            </p>
                            {/* Add more content here */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;
