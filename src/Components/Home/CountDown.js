import React from 'react';

const CountDown = () => {
    return (
        <div className='container xl:px-0 px-5 py-8 md:py-12'>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {/* Contractors */}
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#203f9a] mb-2">
                            150+
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">
                            Contractors
                        </p>
                    </div>

                    {/* Subcontractors/Labor */}
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#203f9a] mb-2">
                            150+
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">
                            Subcontractors/ Labor
                        </p>
                    </div>

                    {/* Clients Review */}
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#203f9a] mb-2">
                            150+
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">
                            Clients Review
                        </p>
                    </div>

                    {/* Companies */}
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#203f9a] mb-2">
                            24
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">
                            Companies
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountDown;