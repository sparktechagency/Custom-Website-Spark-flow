'use client';
import React, { useState } from 'react';

const ContractorNotification = () => {
    const [emailNotification, setEmailNotification] = useState(false);  // Email notification toggle state
    const [pushNotification, setPushNotification] = useState(false);    // Push notification toggle state

    // Toggle Email notification
    const handleEmailToggle = () => {
        setEmailNotification(!emailNotification);
    };

    // Toggle Push notification
    const handlePushToggle = () => {
        setPushNotification(!pushNotification);
    };

    return (
        <div className="max-w-lg mx-auto my-10">

            {/* Email Notification */}
            <div className="flex bg-gray-100  p-6 rounded-lg items-center justify-between mb-4">
                <span>Email Notification</span>
                <button
                    onClick={handleEmailToggle}
                    className={`${emailNotification ? 'bg-blue-500' : 'bg-gray-300'
                        } relative inline-flex items-center h-6 rounded-full w-12 transition-colors`}
                >
                    <span
                        className={`${emailNotification ? 'translate-x-6' : 'translate-x-1'
                            } inline-block w-5 h-5 bg-white rounded-full cursor-pointer transform transition-transform`}
                    ></span>
                </button>
            </div>

            {/* Push Notification */}
            <div className="flex bg-gray-100  p-6  rounded-lg items-center justify-between">
                <span>Push Notification</span>
                <button
                    onClick={handlePushToggle}
                    className={`${pushNotification ? 'bg-blue-500' : 'bg-gray-300'
                        } relative inline-flex items-center h-6 rounded-full w-12 transition-colors`}
                >
                    <span
                        className={`${pushNotification ? 'translate-x-6' : 'translate-x-1'
                            } inline-block w-5 h-5 bg-white rounded-full cursor-pointer transform transition-transform`}
                    ></span>
                </button>
            </div>
        </div>
    );
};

export default ContractorNotification;
