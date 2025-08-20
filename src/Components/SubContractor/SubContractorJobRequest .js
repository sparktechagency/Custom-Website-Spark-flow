import React, { useState } from 'react';

const SubContractorJobRequest  = () => {
  // State to manage active tab and data
  const [activeTab, setActiveTab] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Example job requests for each tab
  const jobRequests = {
    All: [
      { id: 1, subContractor: 'Motin Pagla', email: 'motinpagla420@gmail.com', service: 'Glaziers', date: 'Jul 24, 2025' },
      { id: 2, subContractor: 'Motin Pagla', email: 'motinpagla420@gmail.com', service: 'Roofing', date: 'Jul 24, 2025' },
      { id: 3, subContractor: 'Motin Pagla', email: 'motinpagla420@gmail.com', service: 'Painters', date: 'Jul 24, 2025' },
      { id: 4, subContractor: 'Motin Pagla', email: 'motinpagla420@gmail.com', service: 'Glaziers', date: 'Jul 24, 2025' },
      { id: 5, subContractor: 'Motin Pagla', email: 'motinpagla420@gmail.com', service: 'Painters', date: 'Jul 24, 2025' },
      { id: 6, subContractor: 'Motin Pagla', email: 'motinpagla420@gmail.com', service: 'Painters', date: 'Jul 24, 2025' },
      { id: 7, subContractor: 'Motin Pagla', email: 'motinpagla420@gmail.com', service: 'Painters', date: 'Jul 24, 2025' },
      // Add more entries as needed
    ],
    Roofers: [
      { id: 1, subContractor: 'Motin Pagla', email: 'motinpagla420@gmail.com', service: 'Roofing', date: 'Jul 24, 2025' },
    ],
    Glaziers: [
      { id: 1, subContractor: 'Motin Pagla', email: 'motinpagla420@gmail.com', service: 'Glaziers', date: 'Jul 24, 2025' },
    ],
    Painters: [
      { id: 1, subContractor: 'Motin Pagla', email: 'motinpagla420@gmail.com', service: 'Painters', date: 'Jul 24, 2025' },
    ],
    Plumber: [
      { id: 1, subContractor: 'Motin Pagla', email: 'motinpagla420@gmail.com', service: 'Plumber', date: 'Jul 24, 2025' },
    ],
  };

  const rowsPerPage = 7; // Rows per page
  const totalPages = Math.ceil(jobRequests[activeTab].length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to first page on tab change
  };

  const renderJobRequests = () => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const requestsToDisplay = jobRequests[activeTab].slice(startIndex, endIndex);

    return requestsToDisplay.map((job, index) => (
      <tr key={index}>
        <td className='py-3 px-5'>{job.id}</td>
        <td className='py-3 px-5'>{job.subContractor}</td>
        <td className='py-3 px-5'>{job.email}</td>
        <td className='py-3 px-5'>{job.service}</td>
        <td className='py-3 px-5'>{job.date}</td>
        <td className='py-3 px-5 flex items-center justify-center gap-2'>
          <button className="bg-green-500 text-white px-3 py-1 rounded-md">Accept</button>
          <button className="bg-red-600 text-white px-3 py-1 rounded-md">Cancel</button>
          <button className="bg-[#203f9a] text-white px-3 py-1 rounded-md">Message</button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="container mx-auto p-4">
      {/* Tabs */}
      <div className="mb-4 flex justify-between items-center">
        <div className="tabs flex flex-wrap gap-2 space-x-4">
          {['All', 'Roofers', 'Glaziers', 'Painters', 'Plumber'].map((tab) => (
            <button
              key={tab}
              className={`tab-btn cursor-pointer ${activeTab === tab ? 'bg-[#203f9a] text-white' : 'bg-gray-200 text-black'} px-4 py-2 rounded-md`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Job Request Table */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-[#203f9a]">
              <th className="px-4 py-5">S/N</th>
              <th className="px-4 py-5">Contractor</th>
              <th className="px-4 py-5">Email</th>
              <th className="px-4 py-5">Service</th>
              <th className="px-4 py-5">Date</th>
              <th className="px-4 py-5">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {renderJobRequests()}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div>
          <span>SHOWING {((currentPage - 1) * rowsPerPage) + 1}-{Math.min(currentPage * rowsPerPage, jobRequests[activeTab].length)} OF {jobRequests[activeTab].length}</span>
        </div>
        <div>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 bg-gray-300 rounded-md cursor-pointer">Previous</button>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-300 rounded-md ml-2 cursor-pointer">Next</button>
        </div>
      </div>
    </div>
  );
};

export default SubContractorJobRequest ;
