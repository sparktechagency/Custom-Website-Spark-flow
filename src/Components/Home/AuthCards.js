import icons from '@/icons/icon';
import React, { useEffect, useState } from 'react';

const AuthCards = ({ action, toggleModal }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('login'); // Track active tab ('login' or 'signup')

    // Real-time form input states and validation
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');


    setTimeout(() => {
        console.log('console every 1 second');
    }, 1000);

    useEffect(() => {
        // Poll the localStorage every 100ms to check the action value
        const interval = setInterval(() => {
            const action = localStorage.getItem('action');
            console.log(action); // Logs action value

            // If action is found, set the modal state and stop polling
            if (action) {
                setIsOpen(action);
                clearInterval(interval); // Stop the interval once action is retrieved
            }
        }, 100); // 100ms interval

        console.log(interval);

        return () => clearInterval(interval); // Clean up the interval when the component unmounts
    }, []); // Empty dependency array ensures this runs only once on mount

    useEffect(() => {
        setIsOpen(action);  // This is already handled in the previous useEffect
    }, [action]);

    // Close the modal and reset the form
    const closeModal = () => {
        setIsOpen(false);
        toggleModal(false); // Notify parent component to close the modal
        resetForm();
    };

    // Reset form values
    const resetForm = () => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
        setSuccessMessage('');
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab); // Switch between 'login' and 'signup'
    };

    // Real-time validation and checking
    const validateForm = () => {
        if (activeTab === 'login') {
            if (!email || !password) {
                setError('Both fields are required.');
                return false;
            }
        } else if (activeTab === 'signup') {
            if (!email || !password || !confirmPassword) {
                setError('All fields are required.');
                return false;
            }
            if (password !== confirmPassword) {
                setError('Passwords do not match.');
                return false;
            }
        }
        setError('');
        return true;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return; // If validation fails, stop form submission

        // Simulating successful form submission
        setSuccessMessage(`${activeTab === 'login' ? 'Login' : 'Sign Up'} Successful!`);
        setTimeout(closeModal, 1500); // Close modal after 1.5 seconds
    };

    return (
        <section
            onClick={(e) => e.target === e.currentTarget && closeModal()} // Close modal if clicked outside
            className={`absolute max-w-[600px] w-full bg-[#f3f5fad7] backdrop-blur-sm border-2 border-gray-200 top-5 p-5 rounded-xl 
            ${isOpen === true ? "right-0 duration-500 ease-in-out" : "-right-[150%] duration-500 ease-in-out"}`}
        >
            <button className='flex items-center w-full justify-end mb-3'>
                <span className=' cursor-pointer' onClick={closeModal}>{icons.cross}</span>
            </button>

            {/* Tab Navigation */}
            <div className="flex mb-4">
                <button
                    onClick={() => handleTabChange('login')}
                    className={`w-1/2 font-bold p-2 cursor-pointer border border-gray-200 text-center ${activeTab === 'login' ? 'bg-[#203f9a3a] text-[#203f9a]' : ''}`}
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

            {/* Display error or success message */}
            {error && <div className="text-red-500 mb-3">{error}</div>}
            {successMessage && <div className="text-green-500 mb-3">{successMessage}</div>}

            {/* Form Render Based on Active Tab */}
            <div>
                {activeTab === 'login' ? (
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-3 mb-3 border border-gray-400 rounded-lg"
                                />
                            </div>
                            <div>
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-3 mb-3 border border-gray-400 rounded-lg"
                                />
                            </div>
                            <button type="submit" className="w-full cursor-pointer bg-[#203f9a] rounded-lg text-white p-3">
                                Login
                            </button>
                        </form>
                    </div>
                ) : (
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-3 mb-3 border border-gray-400 rounded-lg"
                                />
                            </div>
                            <div>
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-3 mb-3 border border-gray-400 rounded-lg"
                                />
                            </div>
                            <div>
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full p-3 mb-3 border border-gray-400 rounded-lg"
                                />
                            </div>
                            <button type="submit" className="w-full cursor-pointer bg-[#203f9a] rounded-lg text-white p-3">
                                Sign Up
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AuthCards;