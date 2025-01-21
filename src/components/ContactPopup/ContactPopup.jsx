/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";

const ContactPopup = ({ setContactPopup }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    
    const [errors, setErrors] = useState({
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (name === 'email') {
            validateEmail(value);
        }
    };

    const handleSubmit = () => {
        console.log('Form Data:', formData);
        setContactPopup(false);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrors((prev) => ({ ...prev, email: 'Invalid email address.' }));
        } else {
            setErrors((prev) => ({ ...prev, email: '' }));
        }
    };
    return (
        <>
            <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
                    {" "}
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-semibold text-black/70">
                                Contact Us
                            </h1>
                        </div>
                        <div>
                            <IoCloseOutline className="text-2xl cursor-pointer" onClick={() => setContactPopup(false)} />
                        </div>
                    </div>
                    <div className="mt-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 mb-4 focus:outline-none focus:ring focus:ring-primary"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded border px-4 py-2 mb-4 focus:outline-none focus:ring ${
                            errors.email
                                ? 'border-red-500 focus:ring-red-500'
                                : 'border-gray-300 dark:border-gray-500 dark:bg-gray-800 focus:ring-primary'
                        }`}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mb-4">{errors.email}</p>
                    )}
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 mb-4 focus:outline-none focus:ring focus:ring-primary"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 mb-4 focus:outline-none focus:ring focus:ring-primary"
                    />
                    <div className="flex justify-center">
                        <button
                            className="bg-blue-500 hover:scale-105 duration-200 text-white py-2 px-6 rounded shadow-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPopup;