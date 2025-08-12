'use client'
import React from 'react';

const MessageSidebar = () => {
    // Sample data for the sidebar
    const users = [
        { name: "Motin Mia", role: "Ceo of ToTo Company", image: "https://randomuser.me/api/portraits/men/41.jpg" },
        { name: "Motin Mia", role: "Ceo of ToTo Company", image: "https://randomuser.me/api/portraits/men/42.jpg" },
        { name: "Motin Mia", role: "Ceo of ToTo Company", image: "https://randomuser.me/api/portraits/men/43.jpg" },
        { name: "Motin Mia", role: "Ceo of ToTo Company", image: "https://randomuser.me/api/portraits/men/44.jpg" },
        { name: "Motin Mia", role: "Ceo of ToTo Company", image: "https://randomuser.me/api/portraits/men/45.jpg" },
        { name: "Motin Mia", role: "Ceo of ToTo Company", image: "https://randomuser.me/api/portraits/men/46.jpg" },
        { name: "Motin Mia", role: "Ceo of ToTo Company", image: "https://randomuser.me/api/portraits/men/47.jpg" },
       ];

    return (
        <div className="w-full h-[85vh] overflow-y-auto bg-[#F3F5FA] rounded-lg border-gray-100 border-2 p-4">
            <h2 className="text-xl font-semibold my-4">Messages</h2>
            <div>
                {/* search  */}
                <input
                    onChange={(e) => console.log(e.target.value)}
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 border ring-0 focus:outline-[#203f9a] border-gray-300 rounded-md"
                />
            </div>

            <div className="space-y-4">
                {users.map((user, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                        <img
                            src={user.image}
                            alt={user.name}
                            className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                            <h3 className="font-medium text-lg">{user.name}</h3>
                            <p className="text-sm text-gray-600">{user.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MessageSidebar;
