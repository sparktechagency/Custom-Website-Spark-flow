'use client';
import icons from '@/icons/icon';
import React from 'react';

const HouseWonerDashboard = () => {
    return (
        <div className="">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
                {/* Section 1 */}
                <div className="bg-gray-100 px-5 py-8 rounded-lg shadow-md flex items-center justify-between ">
                    <div>
                        <span className='text-[#203f9a]'>{icons.job}</span>
                        <h2 className="text-lg font-semibold text-center mt-2">Today’s Work</h2>
                    </div>
                    <p className="text-5xl text-center text-[#203f9a] font-bold">05</p>
                </div>
                <div className="bg-gray-100 px-5 py-8 rounded-lg shadow-md flex items-center justify-between ">
                    <div>
                        <span className='text-[#203f9a]'>{icons.job}</span>
                        <h2 className="text-lg font-semibold text-center mt-2">Total Completed Job</h2>
                    </div>
                    <p className="text-5xl text-center text-[#203f9a] font-bold">05</p>
                </div>
                <div className="bg-gray-100 px-5 py-8 rounded-lg shadow-md flex items-center justify-between ">
                    <div>
                        <span className='text-[#203f9a]'>{icons.message}</span>
                        <h2 className="text-lg font-semibold text-center mt-2">Unread Messages</h2>
                    </div>
                    <p className="text-5xl text-center text-[#203f9a] font-bold">05</p>
                </div>
                <div className="bg-gray-100 px-5 py-8 rounded-lg shadow-md flex items-center justify-between ">
                    <div>
                        {icons.averageRating}
                        <h2 className="text-lg font-semibold text-center mt-2">Average Rating</h2>
                    </div>
                    <p className="text-5xl text-center text-[#203f9a] font-bold">05</p>
                </div>

            </div>

            <div className=" space-y-6 grid grid-cols-2 gap-4">
                {/* New Job Requests */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold border-b-2 border-gray-200 pb-2">Todays Job</h3>
                    <table className="min-w-full mt-4">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border-b border-gray-200">S/N</th>
                                <th className="px-4 py-2 border-b border-gray-200">Sub Contractor</th>
                                <th className="px-4 py-2 border-b border-gray-200">Service</th>
                                <th className="px-4 py-2 border-b border-gray-200">Date</th>
                                <th className="px-4 py-2 border-b border-gray-200">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5].map((index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2 border-b border-gray-200">0{index}</td>
                                    <td className="px-4 py-2 border-b border-gray-200">Motin Pagla</td>
                                    <td className="px-4 py-2 border-b border-gray-200">Roofing</td>
                                    <td className="px-4 py-2 border-b border-gray-200">Jul 24, 2025</td>
                                    <td className="px-4 py-2 border-b  justify-center border-gray-200 flex items-center gap-2">
                                        <button className="bg-[#203f9a] cursor-pointer text-white px-2  py-2  rounded-full">
                                            {icons.reject}
                                        </button>
                                        <button className="bg-[#203f9a] cursor-pointer text-white px-2  py-2  rounded-full">
                                            {icons.messageDash}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* New Joined Sub Contractors */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold border-b-2 border-gray-200 pb-2">Recently worked member</h3>
                    <table className="min-w-full mt-4">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border-b border-gray-200">S/N</th>
                                <th className="px-4 py-2 border-b border-gray-200">Sub Contractor</th>
                                <th className="px-4 py-2 border-b border-gray-200">Service</th>
                                <th className="px-4 py-2 border-b border-gray-200">Date</th>
                                <th className="px-4 py-2 border-b border-gray-200">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5].map((index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2 border-b border-gray-200">0{index}</td>
                                    <td className="px-4 py-2 border-b border-gray-200">Motin Pagla</td>
                                    <td className="px-4 py-2 border-b border-gray-200">Roofing</td>
                                    <td className="px-4 py-2 border-b border-gray-200">Jul 24, 2025</td>
                                    <td className="px-4 py-2 border-b border-gray-200 flex items-center justify-center gap-2">
                                        <button className="bg-[#203f9a] cursor-pointer text-white px-2 py-2 rounded-full mr-2">{
                                            icons.check}</button>
                                        <button className="bg-[#203f9a] cursor-pointer text-white px-2  py-2  rounded-full">
                                            {icons.reject}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default HouseWonerDashboard;
