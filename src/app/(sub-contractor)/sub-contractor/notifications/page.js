'use client';
import React, { useState } from 'react';
import { FaBell, FaRegBell } from 'react-icons/fa'; // Notification icons

const notifications = [
  { id: 1, message: "You have a new message from Luke.", time: "2 min ago", read: false },
  { id: 2, message: "You have a new message from Luke.", time: "2 min ago", read: false },
  { id: 3, message: "You have a new message from Luke.", time: "2 min ago", read: true },
  { id: 4, message: "You have a new message from Luke.", time: "2 min ago", read: false },
  { id: 5, message: "You have a new message from Anna.", time: "5 min ago", read: true },
  { id: 6, message: "You have a new comment from John.", time: "8 min ago", read: false },
  { id: 7, message: "You have a new message from Sarah.", time: "10 min ago", read: false },
  { id: 8, message: "You have a new message from Mike.", time: "12 min ago", read: true },
  { id: 9, message: "You have a new comment from Emily.", time: "15 min ago", read: false },
  { id: 10, message: "You have a new message from Luke.", time: "20 min ago", read: false },
  { id: 10, message: "You have a new message from Luke.", time: "20 min ago", read: false },
];

const Page = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // You can change the number of items per page
  const totalPages = Math.ceil(notifications.length / itemsPerPage);

  // Get the notifications to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNotifications = notifications.slice(startIndex, startIndex + itemsPerPage);

  // Handle page navigation
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleMarkAllAsRead = () => {
    // Functionality to mark all notifications as read
    console.log("Marking all notifications as read");
  };

  return (
    <div className="w-full p-4 lg:p-0 mb-2">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Notifications</h1>
        <button
          onClick={handleMarkAllAsRead}
          className="text-sm text-[#203f9a] cursor-pointer font-medium"
        >
          Mark All as Read
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-2">
        {currentNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`flex items-start space-x-4 p-3 cursor-pointer rounded-lg ${!notification.read ? 'bg-[#203f9a1e]' : 'bg-white'}  border-2 border-[#203f9a1e]`}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300">
              {/* Notification Icon */}
              {notification.read ? (
                <FaRegBell className="text-gray-600" />
              ) : (
                <FaBell className="text-gray-500" />
              )}
            </div>
            <div className="flex flex-col">
              <p className="text-sm">{notification.message}</p>
              <span className="text-xs text-gray-500">{notification.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-2 mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-md cursor-pointer disabled:opacity-50"
        >
          Previous
        </button>

        {/* Page Numbers */}
        <span className="flex items-center space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-[#203f9a] text-white' : 'bg-white text-[#203f9a]'}`}
            >
              {index + 1}
            </button>
          ))}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-md cursor-pointer disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;