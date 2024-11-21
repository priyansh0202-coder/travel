
import React from "react";
import { useState } from "react";

const Footer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
            name: "Alex Johnson",
            quote: "Travel made our vacation planning effortless! Their support team is amazing.",
            image: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            name: "Maria Gomez",
            quote: "I highly recommend Travel for all your holiday needs. Seamless and stress-free.",
            image: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            name: "John Doe",
            quote: "Booking with Travel was the best decision! Everything was perfectly organized.",
            image: "https://randomuser.me/api/portraits/men/2.jpg"
        },
        {
            name: "Alex Johnson",
            quote: "Travel made our vacation planning effortless! Their support team is amazing.",
            image: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            name: "Maria Gomez",
            quote: "I highly recommend Travel for all your holiday needs. Seamless and stress-free.",
            image: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            name: "John Doe",
            quote: "Booking with Travel was the best decision! Everything was perfectly organized.",
            image: "https://randomuser.me/api/portraits/men/2.jpg"
        },
    ];

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <footer className="bg-gray-100 py-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
                        See What Our Clients Say About Us
                    </h3>
                    <div className="relative">
                        <div className="flex overflow-hidden">
                            <div
                                className="flex transition-transform duration-500"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-lg shadow-md p-6 w-[400px] mx-4"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-16 h-16 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="text-gray-700 italic">
                                                    "{testimonial.quote}"
                                                </p>
                                                <div className="mt-4 text-right">
                                                    <span className="font-bold text-gray-800">
                                                        - {testimonial.name}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={goToPrevious}
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
                        >
                            &#10094;
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
                        >
                            &#10095;
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                    <div className="mb-6 lg:mb-0">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Travel</h2>
                        <p className="text-gray-600">
                            Travel helps companies manage payments easily.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <i className="fab fa-dribbble"></i>
                            </a>
                        </div>
                    </div>

                    <div className="mb-6 lg:mb-0">
                        <h3 className="font-bold text-gray-800 mb-3">Company</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li>
                                <a href="#about" className="hover:underline">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#careers" className="hover:underline">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#blog" className="hover:underline">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" className="hover:underline">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6 lg:mb-0">
                        <h3 className="font-bold text-gray-800 mb-3">Destinations</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li>
                                <a href="#maldives" className="hover:underline">
                                    Maldives
                                </a>
                            </li>
                            <li>
                                <a href="#los-angeles" className="hover:underline">
                                    Los Angeles
                                </a>
                            </li>
                            <li>
                                <a href="#las-vegas" className="hover:underline">
                                    Las Vegas
                                </a>
                            </li>
                            <li>
                                <a href="#toronto" className="hover:underline">
                                    Toronto
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-800 mb-3">Join Our Newsletter</h3>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-2 border rounded-l-md focus:outline-none"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-orange-500 text-white px-6 py-2 rounded-r-md hover:bg-orange-600"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-gray-600 text-sm mt-2">
                            * We will send you weekly updates for better tour packages.
                        </p>
                    </div>
                </div>

                <div className="border-t mt-10 pt-6 text-center text-gray-600 text-sm">
                    <p>
                        Copyright © Travel 2024. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
