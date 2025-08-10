import icons from '@/icons/icon';
import React, { useEffect, useState } from 'react';

const AuthCards = ({ action }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('login'); // Track active tab ('login' or 'signup')

    useEffect(() => {
        setIsOpen(action);
    }, [action]);

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab); // Switch between 'login' and 'signup'
    };

    return (
        <section className={`absolute max-w-[600px] w-full bg-[#f3f5fad7] backdrop-blur-sm border-2 border-gray-200 top-5 p-5 rounded-xl 
        ${isOpen === true ? "right-0 duration-500 ease-in-out" : "-right-[150%] duration-500 ease-in-out"}`}>
            <button onClick={closeModal} className='flex items-center cursor-pointer w-full justify-end mb-3'>
                {icons.cross}
            </button>

            {/* Tab Navigation */}
            <div className="flex mb-4">
                <button
                    onClick={() => handleTabChange('login')}
                    className={`w-1/2 font-bold p-2 cursor-pointer border border-gray-200  text-center ${activeTab === 'login' ? 'bg-[#203f9a3a] text-[#203f9a]' : ''}`}
                >
                    Login
                </button>
                <button
                    onClick={() => handleTabChange('signup')}
                    className={`w-1/2 font-bold p-2 cursor-pointer border border-gray-200 text-center ${activeTab === 'signup' ? 'bg-[#203f9a3a] text-[#203f9a]' : ''}`}
                >
                    Sign Up
                </button>
            </div>

            {/* Form Render Based on Active Tab */}
            <div>
                {activeTab === 'login' ? (
                    <div className=''>
                        <form>
                            <div>
                                <label>Email</label>
                                <input type="email" placeholder="Email" className="w-full p-3 mb-3 border border-gray-400 rounded-lg" />
                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password" placeholder="Password" className="w-full p-3 mb-3 border border-gray-400 rounded-lg" />
                            </div>
                            <button type="submit" className="w-full cursor-pointer bg-[#203f9a] rounded-lg text-white p-3">Login</button>
                        </form>
                    </div>
                ) : (
                    <div>
                        <form>
                            <div>
                                <label>Email</label>
                                <input type="email" placeholder="Email" className="w-full p-3 mb-3 border border-gray-400 rounded-lg" />
                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password" placeholder="Password" className="w-full p-3 mb-3 border border-gray-400 rounded-lg" />
                            </div>
                            <div>
                                <label>Confirm Password</label>
                                <input type="password" placeholder="Confirm Password" className="w-full p-3 mb-3 border border-gray-400 rounded-lg" />
                            </div>
                            <button type="submit" className="w-full cursor-pointer bg-[#203f9a] rounded-lg text-white p-3">Sign Up</button>
                        </form>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AuthCards;
