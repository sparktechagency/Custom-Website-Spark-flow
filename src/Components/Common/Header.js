'use client';
import React, { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="flex items-center">
                    {/* <img
                        src="/logo.svg"
                        alt="Logo"
                        className="h-8 w-auto"
                    /> */}
                    <span className="ml-2 font-bold text-xl text-gray-800">Spark Flow</span>
                </div>
                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
                </nav>
                {/* Login Button (Desktop) */}
                <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Login
                </button>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <nav className="flex flex-col space-y-2 px-6 py-4">
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-2">
                            Login
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;