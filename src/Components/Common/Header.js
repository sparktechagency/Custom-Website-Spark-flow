'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="container sticky top-0 !mt-10 z-50 w-full h-[100px] bg-contain px-2 bg-no-repeat bg-[url('/Images/Home/header.png')]">
            <div className="w-full flex items-center justify-between px-4 md:px-0 h-full">
                {/* Logo */}
                <div className="text-xl font-bold text-black pl-28">
                    <Link href="/">
                        <img className='w-20' src="/Images/Home/logo.png" alt="" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-black font-medium">
                    <Link href="/">Home</Link>
                    <Link href="/About">About</Link>
                    <Link href="/how-it-works">How it works</Link>
                    <Link href="/features">Features</Link>
                    <Link href="/contact">Contact</Link>
                </nav>

                {/* Login Button (Desktop) */}
                <div className="hidden md:block">
                    <button className="px-4 py-2 cursor-pointer transition h-full flex items-center">
                        <img className='lg:w-auto !w-82' src="/Images/Home/loginbutton.png" alt="" />
                    </button>
                </div>

                {/* Hamburger Menu (Mobile) */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
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
                <div className="md:hidden bg-black bg-opacity-90 px-4 pb-4 space-y-3 text-white text-center">
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/About" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/how-it-works" onClick={() => setIsOpen(false)}>How it works</Link>
                    <Link href="/features" onClick={() => setIsOpen(false)}>Features</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        Login
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
