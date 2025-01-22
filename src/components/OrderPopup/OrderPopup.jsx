/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Booking Data:", data);
    setOrderPopup(false);
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-black/70">
                Book Your Trip
              </h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setOrderPopup(false)}
              />
            </div>
            <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
              {/* Name Field */}
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "Name is required.",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters long.",
                  },
                })}
                className={`w-full rounded-full border px-2 py-1 mb-2 focus:outline-none ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 dark:border-gray-500 dark:bg-gray-800 focus:ring-primary"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mb-2">{errors.name.message}</p>
              )}

              {/* Email Field */}
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address.",
                  },
                })}
                className={`w-full rounded-full border px-2 py-1 mb-2 focus:outline-none ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 dark:border-gray-500 dark:bg-gray-800 focus:ring-primary"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>
              )}

              {/* Address Field */}
              <input
                type="text"
                placeholder="Address"
                {...register("address", {
                  required: "Address is required.",
                  minLength: {
                    value: 5,
                    message: "Address must be at least 5 characters long.",
                  },
                })}
                className={`w-full rounded-full border px-2 py-1 mb-2 focus:outline-none ${
                  errors.address
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 dark:border-gray-500 dark:bg-gray-800 focus:ring-primary"
                }`}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mb-2">{errors.address.message}</p>
              )}

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
