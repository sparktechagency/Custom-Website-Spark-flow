'use client';
import React, { useState } from 'react';

const ContractorEmailPhone = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');


    const handleSubmit = () => {
       console.log('Email:', email ); // Log the email value to the console
       console.log('Phone:', phone); // Log the phone value to the console
    };

    return (
        <div className="max-w-md mx-auto p-6 my-10 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Update Email and Phone</h2>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your new email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number</label>
                <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your new phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
            </div>

            <button
                onClick={handleSubmit}
                className="w-full py-2 bg-[#203f9a] text-white rounded-md cursor-pointer hover:bg-[#183077]"
            >
                Update Information
            </button>
        </div>
    );
};

export default ContractorEmailPhone;
