/* eslint-disable no-unused-vars */
import React from 'react';
import {
    FaInstagram,
    FaLinkedin,
    FaFacebook
} from "react-icons/fa";

const UnderConstructionCont = () => {
    return (
        <div className="pt-[117px]">
            <div className="bg-gradient-to-r from-violet-200 to-fuchsia-200 min-h-[84vh] text-gray-800">
                <div className="text-center pt-32">
                    <div className="mb-8">
                        <h1 style={{ lineHeight: '64px' }} className="text-5xl font-bold bg-clip-text text-transparent text-green-800">
                            Something Amazing is Coming Soon
                        </h1>
                        <p className="mt-3 mb-6 text-lg text-indigo-900">
                            We’re working hard to create something incredible for you. Stay tuned for updates!
                            <br />
                            If you have any questions, feel free to reach out.
                        </p>
                        <a href="mailto:user@example.com"
                            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-md hover:shadow-lg hover:from-purple-600 hover:to-pink-600 transition-transform transform hover:scale-105">
                            Contact Us
                        </a>
                    </div>
                </div>
                <div className="text-center mt-16">
                    <div className="mb-6">
                        <p className="text-2xl font-semibold text-gray-900">Stay Connected</p>
                        <p className="mt-2 text-sm text-gray-700">
                            Follow us on social media for the latest updates and sneak peeks.
                        </p>
                    </div>
                    <div className="flex justify-center space-x-6">
                        <a href="https://instagram.com" title="Instagram" target="_blank" rel="noopener noreferrer"
                            className="text-purple-500 hover:text-pink-500 transition-colors">
                            <FaInstagram className="w-10 h-10" />
                        </a>
                        <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors">
                            <FaFacebook className="w-10 h-10" />
                        </a>
                        <a href="https://linkedin.com" title="LinkedIn" target="_blank" rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700 transition-colors">
                            <FaLinkedin className="w-10 h-10" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UnderConstructionCont;