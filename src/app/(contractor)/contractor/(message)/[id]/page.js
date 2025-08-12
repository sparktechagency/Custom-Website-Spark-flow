'use client';
import React, { useState } from 'react';
import { FaPaperclip } from 'react-icons/fa'; // For the attachment icon
import { FiSend } from 'react-icons/fi'; // For the send icon

const MessageInput = () => {
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        console.log('Message sent:', message);
        setMessage(''); // Clear message after sending
    };

    return (
        <div className="w-full border-2 border-gray-100 rounded-lg flex flex-col justify-between ">
            <div>
                <div>
                    <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur eaque blanditiis veniam, cum modi?</p>

                </div>
            </div>
            <div className="flex items-center border-2 border-gray-300 rounded-lg p-2 m-2">
                {/* Attachment Icon */}
                <button className="text-gray-500">
                    <FaPaperclip />
                </button>

                {/* Text Input */}
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-grow px-4 py-2 text-sm border-none outline-none"
                    placeholder="Type here"
                />

                {/* Send Button */}
                <button
                    onClick={handleSendMessage}
                    className="bg-blue-500 text-white p-2 rounded-full flex items-center justify-center"
                >
                    <FiSend />
                </button>
            </div>
        </div>
    );
};

export default MessageInput;
