'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="container sticky top-0 md:!mt-10 border-b md:border-none z-[999] w-full sm:h-[80px] h-[60px]  xl:h-[100px] backdrop-blur-sm bg-contain px-2 bg-no-repeat sm:bg-transparent md:bg-[url('/Images/Home/header.png')] flex items-center ">
            <div className="w-full backdrop-blur-sm flex lg:items-center items-start lg:pt-0 pt-2 justify-between px-4 md:px-0 h-full">
                {/* Logo */}
                <div className="text-xl font-bold text-black pl-2 sm:pl-4 md:pl-8 lg:pl-16 xl:pl-28">
                    <Link href="/">
                        <img className='w-12 sm:w-14 md:w-10 lg:w-10 xl:w-20' src="/Images/Home/logo.png" alt="Logo" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center lg:pt-0 pt-2  gap-3 md:gap-4 lg:gap-6 xl:gap-8 text-black font-medium text-xs md:text-sm lg:text-base">
                    <Link href="/" className="hover:text-blue-600 transition-colors whitespace-nowrap">Home</Link>
                    <Link href="/About" className="hover:text-blue-600 transition-colors whitespace-nowrap">About</Link>
                    <Link href="/how-it-works" className="hover:text-blue-600 transition-colors whitespace-nowrap">How it works</Link>
                    <Link href="/features" className="hover:text-blue-600 transition-colors whitespace-nowrap">Features</Link>
                    <Link href="/contact" className="hover:text-blue-600 transition-colors whitespace-nowrap">Contact</Link>
                </nav>

                {/* Login Button (Desktop) */}
                <div className="hidden md:block">
                    <button className="px-1 md:px-2 mr-3 lg:px-4 py-2 cursor-pointer transition h-full flex items-center hover:opacity-80">
                        <img className='w-20 md:w-24 lg:w-48 xl:w-72 max-w-none' src="/Images/Home/loginbutton.png" alt="Login" />
                    </button>
                </div>

                {/* Hamburger Menu (Mobile) */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-black focus:outline-none p-2"
                        aria-label="Toggle menu"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white backdrop-blur-sm  px-4 pb-4 space-y-3 text-black text-center absolute top-full left-0 right-0 shadow-lg">
                    <div className="flex flex-col space-y-3 pt-4">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-blue-400 transition-colors py-2"
                        >
                            Home
                        </Link>
                        <Link
                            href="/About"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-blue-400 transition-colors py-2"
                        >
                            About
                        </Link>
                        <Link
                            href="/how-it-works"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-blue-400 transition-colors py-2"
                        >
                            How it works
                        </Link>
                        <Link
                            href="/features"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-blue-400 transition-colors py-2"
                        >
                            Features
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-blue-400 transition-colors py-2"
                        >
                            Contact
                        </Link>
                        <div className="pt-2">
                            <button className="px-4 py-2 cursor-pointer transition flex items-center justify-center hover:opacity-80 mx-auto">
                                <img className='w-32 max-w-[200px]' src="/Images/Home/loginbutton.png" alt="Login" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;