"use client";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#F3F5FA] py-8 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-8">
        {/* Left Side */}
        <div className="max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-3">
            <img
              src="/Images/Home/logo.png"
              alt="My Sub Connection"
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Text */}
          <p className="text-gray-700 text-sm">
            Now that your profile is set, you can start exploring! Contractors
            can post job openings and manage their project listings.
            Subcontractors can browse through the available jobs and filter by
            project type, skill set, and location.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-5">
            <a href="#" className="bg-blue-900 p-3 rounded-lg text-white hover:bg-blue-700 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-blue-900 p-3 rounded-lg text-white hover:bg-blue-700 transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-blue-900 p-3 rounded-lg text-white hover:bg-blue-700 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-blue-900 p-3 rounded-lg text-white hover:bg-blue-700 transition">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Right Side - Newsletter */}
        <div className="w-full max-w-md">
          <form className="flex bg-white border border-blue-300 rounded-lg overflow-hidden shadow-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-[#203f9a] cursor-pointer text-white px-6 hover:bg-[#1c3581] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 container  border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>© Md. Nurunnabi 2025</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Term of Services
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
