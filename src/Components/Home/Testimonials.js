'use client';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const testimonials = [
    {
        name: "Nimur Rahman Nerob",
        role: "Backend Developer",
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=900&auto=format&fit=crop&q=60",
        review:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        rating: 5,
    },
    {
        name: "Nimur Rahman Nerob",
        role: "Backend Developer",
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=900&auto=format&fit=crop&q=60",
        review:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        rating: 4,
    },
    {
        name: "Nimur Rahman Nerob",
        role: "Product Manager",
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=900&auto=format&fit=crop&q=60",
        review:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        rating: 5,
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to get the number of items per slide based on screen size (responsive)
    const getItemsPerSlide = () => {
        // Check screen width and return either 1 or 2 items per slide
        if (window.innerWidth >= 768) {  // Medium screen (md) or larger
            return 2;
        } else {
            return 1;  // Small screen
        }
    };

    // Function to go to the next slide
    const nextSlide = () => {
        const itemsPerSlide = getItemsPerSlide();
        setCurrentIndex((prevIndex) => (prevIndex + itemsPerSlide) % testimonials.length); // Increment by itemsPerSlide
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        const itemsPerSlide = getItemsPerSlide();
        setCurrentIndex(
            (prevIndex) => (prevIndex - itemsPerSlide + testimonials.length) % testimonials.length // Decrement by itemsPerSlide
        );
    };

    return (
        <section className="container xl:px-0 px-5 py-10 bg-white">
            <div className="mb-8">
                <h2 className="text-3xl font-bold">Testimonials</h2>
                <p className="text-gray-500">Best platform for finding reliable subcontractors</p>
            </div>

            <div className="relative">
                {/* Use grid layout for responsiveness */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Display testimonials */}
                    {testimonials.slice(currentIndex, currentIndex + getItemsPerSlide()).map((testimonial, index) => (
                        <div
                            className="bg-gray-100 duration-700 rounded-2xl grid md:grid-cols-3 gap-5 border border-gray-200"
                            key={index}
                        >
                            <div className="relative">
                                <img className='w-full h-full' src="/Images/Home/testmonial-bg.png" alt="" />
                                <div className='absolute top-1/2 text-center md:transform md:-translate-y-1/2 '>
                                    <h3 className="mt-4 font-semibold text-center">{testimonial.name}</h3>
                                    <p className="text-gray-800 text-sm">{testimonial.role}</p>
                                    <img className='md:w-2/3 mx-auto my-2' src="/Images/Home/sub-line.png" alt="" />
                                    <div className="flex justify-center mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className='absolute top-1/3 md:top-1/2 left-1/3 lg:left-5/6  md:-right-1/3 transform -translate-y-1/2'>
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-32 h-32 rounded-lg object-cover"
                                    />
                                </div>
                            </div>
                            <div className="text-gray-600 md:col-span-2 md:px-20 px-5 md:my-10 my-5 text-sm leading-relaxed">
                                <div className='flex justify-end mb-5'><img className='w-20 ' src="/Images/Home/queat.png" alt="" /></div>
                                {testimonial.review}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Custom Navigation */}
                <div className="flex items-center justify-center mt-8 gap-4">
                    <button
                        onClick={prevSlide}
                        className="bg-[#bac3de] p-3 rounded-full cursor-pointer hover:bg-[#8299df] transition"
                    >
                        <IoChevronBack size={20} />
                    </button>

                    {/* Pagination Dots */}
                    <div className="flex items-center justify-center">
                        {testimonials.map((_, index) => (
                            <span
                                key={index}
                                className={`w-5 h-5 rounded-full mx-1 cursor-pointer ${currentIndex === index ? "bg-[#5f81e6] " : "bg-gray-300"
                                    }`}
                                onClick={() => setCurrentIndex(index)} // Clicking a dot changes the slide
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="bg-[#bac3de] p-3 rounded-full cursor-pointer hover:bg-[#8299df] transition"
                    >
                        <IoChevronForward size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
