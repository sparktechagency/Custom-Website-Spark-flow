'use client';
import React, { useState, useRef } from 'react';

const ContractorChangePass = () => {
    const [formStage, setFormStage] = useState(1);  // 1: Change Password, 2: Forgot Password, 3: Verify OTP, 4: Update Password
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState(Array(6).fill(''));  // OTP state array
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    // Handle OTP sending (mock)
    const handleSendOtp = () => {
        console.log(`Sending OTP to ${email}`);
        setFormStage(3);  // Move to OTP verification stage
    };

    // Handle OTP verification (mock)
    const handleVerifyOtp = () => {
        console.log(`Verifying OTP: ${otp.join('')}`);
        setFormStage(4);  // Move to Update Password stage
    };

    // Handle Change Password (mock)
    const handleChangePassword = () => {
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log(`Password updated to: ${newPassword}`);
        alert("Password updated successfully!");
    };

    // Handle OTP input change
    const handleOtpChange = (e, index) => {
        const value = e.target.value;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Focus on the next input if the current one is filled
        if (value && index < 5) {
            document.getElementById(`otp-field-${index + 1}`).focus();
        }
    };

    return (
        <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
                {formStage === 1 && 'Change Password'}
                {formStage === 2 && 'Forgot Password'}
                {formStage === 3 && 'Verify OTP'}
                {formStage === 4 && 'Update Password'}
            </h2>

            {/* Change Password Form (Stage 1) */}
            {formStage === 1 && (
                <div>
                    <div className="mb-4">
                        <label htmlFor="newPassword" className="block text-sm font-semibold mb-2">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            placeholder="Enter your new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">Confirm New Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm your new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <button
                        onClick={handleChangePassword}
                        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Change Password
                    </button>

                    <p className="text-center mt-4 text-sm">
                        Forgot your password?{' '}
                        <span onClick={() => setFormStage(2)} className="text-blue-500 cursor-pointer">Reset it here</span>
                    </p>
                </div>
            )}

            {/* Forgot Password Form (Stage 2) */}
            {formStage === 2 && (
                <div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <button
                        onClick={handleSendOtp}
                        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Send OTP
                    </button>

                    <p className="text-center mt-4 text-sm">
                        Remember your password?{' '}
                        <span onClick={() => setFormStage(1)} className="text-blue-500 cursor-pointer">Go back to change password</span>
                    </p>
                </div>
            )}

            {/* Verify OTP Form (Stage 3) */}
            {formStage === 3 && (
                <div>
                    <div className="mb-4">
                        <label htmlFor="otp" className="block text-sm font-semibold mb-2">Enter OTP</label>
                        <div className="flex space-x-2">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    id={`otp-field-${index}`}
                                    value={digit}
                                    onChange={(e) => handleOtpChange(e, index)}
                                    maxLength="1"
                                    className="w-10 h-10 text-center border border-gray-300 rounded-md"
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handleVerifyOtp}
                        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Verify OTP
                    </button>

                    <p className="text-center mt-4 text-sm">
                        Didn't receive the OTP?{' '}
                        <span className="text-blue-500 cursor-pointer">Resend OTP</span>
                    </p>
                </div>
            )}

            {/* Update Password Form (Stage 4) */}
            {formStage === 4 && (
                <div>
                    <div className="mb-4">
                        <label htmlFor="newPassword" className="block text-sm font-semibold mb-2">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            placeholder="Enter your new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">Confirm New Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm your new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <button
                        onClick={handleChangePassword}
                        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Update Password
                    </button>
                </div>
            )}
        </div>
    );
};

export default ContractorChangePass;
