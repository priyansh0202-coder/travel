import React, { useState } from 'react';
import Navbar from './Navbar';
import CreateYourOwnPackage from './CreateYourOwnPackage';
// import { useNavigate } from 'react-router-dom';
import Services from './Services';

const HeroSection = () => {
    const [showPackageBuilder, setShowPackageBuilder] = useState(false);

    return (
        <section>

            <div
                id="home"
                className="relative bg-cover bg-center h-screen"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1589312133722-eab40c686ebb?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                }}
            >
                <Navbar onPackagesClick={() => setShowPackageBuilder(true)} />
                {showPackageBuilder && (
                    <CreateYourOwnPackage onClose={() => setShowPackageBuilder(false)} />
                )}

                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                <div className="container mx-auto relative z-10 text-white text-center flex flex-col justify-center h-full px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mx-auto leading-tight">
                        No matter where you're going, <br /> we'll take you there
                    </h1>

                    <div className="flex justify-center mt-8">
                        <div className="bg-white bg-opacity-40 p-4 rounded-md flex flex-col sm:flex-row gap-4 w-full max-w-2xl box-border">
                            <input
                                type="text"
                                placeholder="Where to?"
                                className="px-4 py-2 rounded text-black bg-transparent w-full sm:w-auto placeholder-black"
                            />
                            <select className="px-4 py-2 rounded text-black bg-transparent w-full sm:w-auto">
                                <option>Travel Type</option>
                            </select>
                            <select className="px-4 py-2 rounded text-black bg-transparent w-full sm:w-auto">
                                <option>Duration</option>
                            </select>
                            <button className="bg-red-500 px-6 py-2 text-black rounded w-full sm:w-auto">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center">We Offer Best Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 text-center">
                        {[
                            { title: 'Guided Tours', icon: '👨‍⚖️' },
                            { title: 'Best Flights Options', icon: '✈️' },
                            { title: 'Religious Tours', icon: '🙏' },
                            { title: 'Medical Insurance', icon: '🏥' },
                        ].map((service, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold">{service.title}</h3>
                                <p className="text-gray-500 mt-2">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1535762978982-79119ca47447?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Romantic"
                            className="rounded-lg shadow-lg w-1/2"
                        />

                    </div>


                    <div>
                        <h3 className="text-2xl font-bold">Our Romantic Tropical Destinations</h3>
                        <p className="text-gray-600 mt-4">
                            Explore some of the most serene and exotic tropical destinations perfect
                            for honeymooners. Let us take care of everything.
                        </p>
                        <button className="bg-red-500 text-white px-6 py-3 rounded mt-4">
                            View Packages
                        </button>
                    </div>
                </div>

            </section>
            <Services />
        </section>
    );
};

export default HeroSection;
