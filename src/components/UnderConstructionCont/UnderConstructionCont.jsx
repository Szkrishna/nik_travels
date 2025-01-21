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
            <div className="bg-gradient-to-r from-violet-200 to-fuchsia-300 min-h-[84vh] text-gray-800">
                <div className="text-center pt-32">
                    <div className="mb-8">
                        <h1 className="text-5xl font-extrabold text-gray-900">
                            Something Amazing is Coming Soon
                        </h1>
                        <p className="mt-6 mb-10 text-lg text-gray-700">
                            We’re working hard to create something incredible for you. Stay tuned for updates!
                            If you have any questions, feel free to reach out.
                        </p>
                        <a href="mailto:user@example.com"
                            className="px-8 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                            Contact Us
                        </a>
                    </div>
                </div>
                <div className="text-center mt-20">
                    <div className="mb-6">
                        <p className="text-2xl font-semibold text-gray-800">Stay Connected</p>
                        <p className="mt-2 text-sm text-gray-600">
                            Follow us on social media for the latest updates and sneak peeks.
                        </p>
                    </div>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://instagram.com"
                            title="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-pink-500 transition-colors"
                        >
                            <FaInstagram className="w-8 h-8" />
                        </a>
                        <a
                            href="https://facebook.com"
                            title="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-blue-500 transition-colors"
                        >
                            <FaFacebook className="w-8 h-8" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            title="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-blue-400 transition-colors"
                        >
                            <FaLinkedin className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnderConstructionCont;