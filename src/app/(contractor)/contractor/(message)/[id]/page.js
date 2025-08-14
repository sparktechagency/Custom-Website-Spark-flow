'use client';
import icons from '@/icons/icon';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { FaPaperclip } from 'react-icons/fa'; // For the attachment icon
import { FiSend } from 'react-icons/fi'; // For the send icon

const MessageInput = () => {
    const [message, setMessage] = useState('');
    const [image, setImage] = useState(null); // For storing the uploaded image
    const { id } = useParams();


    const handleSendMessage = () => {
        console.log('Message sent:', message);
        if (image) {
            console.log('Image:', image);
        }
        setMessage(''); // Clear message after sending
        setImage(null); // Clear image after sending
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file)); // Preview the uploaded image
        }
    };

    return (
        <div className="w-full border-2 border-gray-100 rounded-lg flex flex-col justify-between p-2">

            <div className='flex  flex-col gap-5 max-h-[75vh] overflow-x-auto'>
                {/* Sample messages (can be dynamic in real use) */}
                <div className='flex items-start space-x-2'>
                    <img className='w-10 h-10 rounded-lg' src="https://randomuser.me/api/portraits/men/41.jpg" alt="" />
                    <p className='text-sm w-2/3 max-w-[600px] bg-blue-100 rounded-lg p-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur eaque blanditiis veniam, cum modi?
                    </p>
                </div>
                <div className='flex items-end justify-end space-x-2'>
                    <p className='text-sm w-2/3 max-w-[600px] bg-green-100 rounded-lg p-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur eaque blanditiis veniam, cum modi?
                    </p>
                </div>
                <div className='flex items-start space-x-2'>
                    <img className='w-10 h-10 rounded-lg' src="https://randomuser.me/api/portraits/men/41.jpg" alt="" />
                    <p className='text-sm w-2/3 max-w-[600px] bg-blue-100 rounded-lg p-2'>
                        Demo ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur eaque blanditiis veniam, cum modi?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur eaque blanditiis veniam, cum modi?
                        demo message 100 word need to write
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur eaque blanditiis veniam, cum modi?
                    </p>
                </div>
                <div className='flex items-end justify-end space-x-2'>
                    <p className='text-sm w-2/3 max-w-[600px] bg-green-100 rounded-lg p-2'>
                        I want to work with you
                    </p>
                </div>
                <div className='flex items-start space-x-2'>
                    <img className='w-10 h-10 rounded-lg' src="https://randomuser.me/api/portraits/men/41.jpg" alt="" />
                    <p className='text-sm w-2/3 max-w-[600px] bg-blue-100 rounded-lg p-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur eaque blanditiis veniam, cum modi?
                    </p>
                </div>
                <div className='flex items-end justify-end space-x-2'>
                    <p className='text-sm w-2/3 max-w-[600px] bg-green-100 rounded-lg p-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur eaque blanditiis veniam, cum modi?
                    </p>
                </div>
                <div className='flex items-start space-x-2'>
                    <img className='w-10 h-10 rounded-lg' src="https://randomuser.me/api/portraits/men/41.jpg" alt="" />
                    <p className='text-sm w-2/3 max-w-[600px] bg-blue-100 rounded-lg p-2'>
                        Demo ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur eaque blanditiis veniam, cum modi?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur eaque blanditiis veniam, cum modi?
                        demo message 100 word need to write
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur eaque blanditiis veniam, cum modi?
                    </p>
                </div>
                <div className='flex items-end justify-end space-x-2'>
                    <p className='text-sm w-2/3 max-w-[600px] bg-green-100 rounded-lg p-2'>
                        I want to work with you
                    </p>
                </div>
                <div className='flex items-start space-x-2'>
                    <img className='w-10 h-10 rounded-lg' src="https://randomuser.me/api/portraits/men/41.jpg" alt="" />
                    <p className='text-sm w-2/3 max-w-[600px] bg-blue-100 rounded-lg p-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur eaque blanditiis veniam, cum modi?
                    </p>
                </div>
                <div className='flex items-end justify-end space-x-2'>
                    <p className='text-sm w-2/3 max-w-[600px] bg-green-100 rounded-lg p-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur eaque blanditiis veniam, cum modi?
                    </p>
                </div>
                <div className='flex items-start space-x-2'>
                    <img className='w-10 h-10 rounded-lg' src="https://randomuser.me/api/portraits/men/41.jpg" alt="" />
                    <p className='text-sm w-2/3 max-w-[600px] bg-blue-100 rounded-lg p-2'>
                        Demo ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur eaque blanditiis veniam, cum modi?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur eaque blanditiis veniam, cum modi?
                        demo message 100 word need to write
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aspernatur eaque blanditiis veniam, cum modi?
                    </p>
                </div>
                <div className='flex items-end justify-end space-x-2'>
                    <p className='text-sm w-2/3 max-w-[600px] bg-green-100 rounded-lg p-2'>
                        I want to work with you
                    </p>
                </div>

            </div>

            {/* Message Input Box */}
            <div>

                <div className="flex items-center border-2 border-gray-300 rounded-lg py-1 pl-3 pr-2 mt-4">
                    {/* Attachment Icon */}


                    {image ? (
                        <div className="relative">
                            <img src={image} alt="Uploaded Preview" className="w-12 border border-gray-300 object-cover rounded-md" />
                            <span onClick={() => setImage(null)} className='absolute -top-1 -right-2 cursor-pointer rounded-lg flex items-center justify-center text-sm bg-red-200 w-6 h-6'>{icons.cross}</span>
                        </div>
                    )
                        :
                        <label htmlFor="file-upload" className="text-gray-500 cursor-pointer">
                            <FaPaperclip />
                            {/* Invisible file input */}
                            <input
                                id="file-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </label>
                    }

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
                        className="bg-[#203f9a] cursor-pointer text-white p-3 rounded-lg flex items-center justify-center"
                    >
                        <FiSend className='text-2xl' />
                    </button>
                </div>

            </div>
            {/* Image Preview (optional) */}

        </div>
    );
};

export default MessageInput;
