'use client';
import icons from '@/icons/icon';
import React from 'react';

const SubContractorDashboard = () => {
    return (
        <div className="">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
                {/* Section 1 */}
                <div className="bg-[#ded41741] px-5 py-8 rounded-lg shadow-md flex items-center justify-between ">
                    <div>
                        <span className=''>{icons.job}</span>
                        <h2 className="text-lg font-semibold text-center mt-2">Today Jobs</h2>
                    </div>
                    <p className="text-5xl text-center font-bold">05</p>
                </div>
                <div className="bg-[#ded41741] px-5 py-8 rounded-lg shadow-md flex items-center justify-between ">
                    <div>
                        <span className=''>{icons.findJobs}</span>
                        <h2 className="text-lg font-semibold text-center mt-2">Total Completed Job</h2>
                    </div>
                    <p className="text-5xl text-center  font-bold">05</p>
                </div>
                <div className="bg-[#ded41741] px-5 py-8 rounded-lg shadow-md flex items-center justify-between ">
                    <div>
                        <span className=''>{icons.message}</span>
                        <h2 className="text-lg font-semibold text-center mt-2">Unread Messages</h2>
                    </div>
                    <p className="text-5xl text-center  font-bold">05</p>
                </div>
                <div className="bg-[#ded41741] px-5 py-8 rounded-lg shadow-md flex items-center justify-between ">
                    <div>
                        {icons.averageRating}
                        <h2 className="text-lg font-semibold text-center mt-2">Average Rating</h2>
                    </div>
                    <p className="text-5xl text-center  font-bold">05</p>
                </div>

            </div>

            <div className=" space-y-6 grid grid-cols-2 gap-4">
                {/* New Job Requests */}
                <div className="bg-white p-6 rounded-lg border border-[#ded41741]">
                    <h3 className="text-xl font-semibold border-b-2 border-[#ded41741] pb-2">Todays Job</h3>
                    <table className="min-w-full mt-4">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border-b border-[#ded41741]">S/N</th>
                                <th className="px-4 py-2 border-b border-[#ded41741]">Sub Contractor</th>
                                <th className="px-4 py-2 border-b border-[#ded41741]">Service</th>
                                <th className="px-4 py-2 border-b border-[#ded41741]">Date</th>
                                <th className="px-4 py-2 border-b border-[#ded41741]">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5].map((index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2 border-b border-[#ded41741]">0{index}</td>
                                    <td className="px-4 py-2 border-b border-[#ded41741]">Motin Pagla</td>
                                    <td className="px-4 py-2 border-b border-[#ded41741]">Roofing</td>
                                    <td className="px-4 py-2 border-b border-[#ded41741]">Jul 24, 2025</td>
                                    <td className="px-4 py-2 border-b border-[#ded41741] flex items-center gap-2">
                                        <button className="bg-[#ded317] cursor-pointer text-white px-2  py-2  rounded-full">
                                            {icons.reject}
                                        </button>
                                        <button className="bg-[#ded317] cursor-pointer text-white px-2  py-2  rounded-full">
                                            {icons.messageDash}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* New Joined Sub Contractors */}
                <div className="bg-white p-6 rounded-lg border border-[#ded41741]">
                    <h3 className="text-xl font-semibold border-b-2 border-[#ded41741] pb-2">New Job Requests</h3>
                    <table className="min-w-full mt-4">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border-b border-[#ded41741]">S/N</th>
                                <th className="px-4 py-2 border-b border-[#ded41741]">Sub Contractor</th>
                                <th className="px-4 py-2 border-b border-[#ded41741]">Service</th>
                                <th className="px-4 py-2 border-b border-[#ded41741]">Date</th>
                                <th className="px-4 py-2 border-b border-[#ded41741]">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5].map((index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2 border-b border-[#ded41741]">0{index}</td>
                                    <td className="px-4 py-2 border-b border-[#ded41741]">Motin Pagla</td>
                                    <td className="px-4 py-2 border-b border-[#ded41741]">Roofing</td>
                                    <td className="px-4 py-2 border-b border-[#ded41741]">Jul 24, 2025</td>
                                    <td className="px-4 py-2 border-b border-[#ded41741] flex items-center gap-2">
                                        <button className="bg-[#ded317] cursor-pointer text-white px-2 py-2 rounded-full mr-2">{
                                            icons.check}</button>
                                        <button className="bg-[#ded317] cursor-pointer text-white px-2  py-2  rounded-full">
                                            {icons.reject}
                                        </button>
                                        <button className="bg-[#ded317] cursor-pointer text-white px-2  py-2  rounded-full">
                                            {icons.messageDash}
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

export default SubContractorDashboard;
