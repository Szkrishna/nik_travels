/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useForm } from 'react-hook-form';
import { IoCloseOutline } from 'react-icons/io5';

const ContactPopup = ({ setContactPopup }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        setContactPopup(false);
    };

    return (
        <>
            <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold text-black/70">
                            Contact Us
                        </h1>
                        <IoCloseOutline
                            className="text-2xl cursor-pointer"
                            onClick={() => setContactPopup(false)}
                        />
                    </div>
                    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                        {/* Name Field */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            {...register('name', {
                                required: 'Name is required.',
                                minLength: {
                                    value: 3,
                                    message: 'Name must be at least 3 characters long.',
                                },
                            })}
                            className={`w-full rounded border px-4 py-2 mb-2 focus:outline-none ${
                                errors.name
                                    ? 'border-red-500 focus:ring-red-500'
                                    : 'border-gray-300 dark:border-gray-500 dark:bg-gray-800 focus:ring-primary'
                            }`}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mb-2">{errors.name.message}</p>
                        )}

                        {/* Email Field */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            {...register('email', {
                                required: 'Email is required.',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Invalid email address.',
                                },
                            })}
                            className={`w-full rounded border px-4 py-2 mb-2 focus:outline-none ${
                                errors.email
                                    ? 'border-red-500 focus:ring-red-500'
                                    : 'border-gray-300 dark:border-gray-500 dark:bg-gray-800 focus:ring-primary'
                            }`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>
                        )}

                        {/* Phone Field */}
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            {...register('phone', {
                                required: 'Phone number is required.',
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: 'Phone number must be 10 digits.',
                                },
                            })}
                            className={`w-full rounded border px-4 py-2 mb-2 focus:outline-none ${
                                errors.phone
                                    ? 'border-red-500 focus:ring-red-500'
                                    : 'border-gray-300 dark:border-gray-500 dark:bg-gray-800 focus:ring-primary'
                            }`}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mb-2">{errors.phone.message}</p>
                        )}

                        {/* Message Field */}
                        <textarea
                            name="message"
                            placeholder="Message"
                            {...register('message', {
                                required: 'Message is required.',
                                minLength: {
                                    value: 10,
                                    message: 'Message must be at least 10 characters long.',
                                },
                            })}
                            className={`w-full rounded border px-4 py-2 mb-2 focus:outline-none ${
                                errors.message
                                    ? 'border-red-500 focus:ring-red-500'
                                    : 'border-gray-300 dark:border-gray-500 dark:bg-gray-800 focus:ring-primary'
                            }`}
                        />
                        {errors.message && (
                            <p className="text-red-500 text-sm mb-2">{errors.message.message}</p>
                        )}

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:scale-105 duration-200 text-white py-2 px-6 rounded shadow-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactPopup;
