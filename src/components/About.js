import React, { useState } from 'react';
import Navbar from './Navbar';
import CreateYourOwnPackage from './CreateYourOwnPackage';

function About() {
    const [showPackageBuilder, setShowPackageBuilder] = useState(false);

    return (
        <div>
            <section>
                <div
                    id="home"
                    className="relative bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1464703798045-7a86b08ced50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                        backgroundSize: "100% auto",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center top",
                        height: "70vh",
                    }}
                >
                    <Navbar onPackagesClick={() => setShowPackageBuilder(true)} />
                    {showPackageBuilder && (
                        <CreateYourOwnPackage onClose={() => setShowPackageBuilder(false)} />
                    )}

                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                    <div className="container mx-auto relative z-10 text-white text-center flex flex-col justify-center h-full px-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mx-auto leading-tight">
                            About Us
                        </h1>

                    </div>
                </div>

                <div className="container mx-auto px-6 py-20">
                    <div className="flex items-center justify-between gap-12">
                        <div className="w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                We Provide You Best Europe Sightseeing Tours
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                                reprehenderit delectus corporis nulla, in atque temporibus exercitationem
                                voluptatum sequi dolorem.
                            </p>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-colors">
                                View Packages
                            </button>
                        </div>
                        <div className="w-1/2">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1701676639172-d5005df5e0fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Europe Tours"
                                    className="w-full h-auto rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6 mb-20">
                    <div className="relative h-80 rounded-xl overflow-hidden">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1725408134180-2d99705b2dc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Wanderlust"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center pl-80">
                            <h2 className="text-6xl font-cursive text-white font-serif">Wanderlust</h2>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6 py-20">
                    <h2 className="text-center text-3xl font-bold mb-6">
                        <span className="text-red-500 uppercase text-sm">Explore More</span>
                        <br />
                        Our International Packages
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Barcelona",
                                price: "$840",
                                image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
                            },
                            {
                                title: "Switzerland",
                                price: "$840",
                                image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                            },
                            {
                                title: "Rio de Janeiro",
                                price: "$840",
                                image: "https://images.pexels.com/photos/2530501/pexels-photo-2530501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                            },
                            {
                                title: "Maldives",
                                price: "$840",
                                image: "https://images.pexels.com/photos/1287452/pexels-photo-1287452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                            },
                            {
                                title: "Los Angeles",
                                price: "$840",
                                image: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd",
                            },
                            {
                                title: "Thailand",
                                price: "$840",
                                image: "https://images.pexels.com/photos/2108831/pexels-photo-2108831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                            },
                            {
                                title: "India",
                                price: "$840",
                                image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                            },
                            {
                                title: "Bhutan",
                                price: "$840",
                                image: "https://images.pexels.com/photos/5011723/pexels-photo-5011723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                            },
                        ].map((packageItem, index) => (
                            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={packageItem.image}
                                    alt={packageItem.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
                                    <h3 className="text-lg font-bold">{packageItem.title}</h3>
                                    <p className="text-sm">{packageItem.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    );
}

export default About;

