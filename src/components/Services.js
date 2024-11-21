import React from 'react';

const Services = () => {
    return (
        <div>
            <section
                id="services"
                className="bg-cover bg-center bg-gray-100 py-16"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                }}
            >
                <div className="container mx-auto text-center bg-white bg-opacity-30 p-8 rounded-md">
                    <h2 className="text-3xl font-bold">Let's Make Your Next Holiday Amazing</h2>
                    <p className="text-gray-600 mt-4">
                        We provide you with the best Europe sightseeing tours and other experiences.
                    </p>
                </div>
            </section>
            <section className="bg-white py-16">
                <div className="container mx-auto text-center">
                    <h3 className="text-red-500 uppercase font-bold">Promotion</h3>
                    <h2 className="text-3xl font-bold mt-4">
                        We Provide You Best Europe Sightseeing Tours
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Experience Europe&apos;s most iconic landmarks and breathtaking sights. Let us guide you through the rich history and vibrant culture of the continent.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        {[
                            {
                                image: 'https://images.unsplash.com/photo-1705736370057-719aaba39839?q=80&w=1935&auto=format&fit=cover&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                price: '$850',
                            },
                            {
                                image: 'https://plus.unsplash.com/premium_photo-1680284197360-f1c214c96b29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                price: '$950',
                            },
                            {
                                image: 'https://media.istockphoto.com/id/626062244/photo/chicago-skyline-aerial-view-at-dusk.jpg?s=612x612&w=0&k=20&c=NWrCtWaR8GKIctTKDr004l2H_c4vdU4Qxx0cWH3FnIo=',
                                price: '$750',
                            },
                            {
                                image: 'https://images.unsplash.com/photo-1699012462295-bace478f27bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                price: '$899',
                            },
                            {
                                image: 'https://plus.unsplash.com/premium_photo-1700483717331-6da3888bc3db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                price: '$840',
                            },
                        ].map((card, index) => (
                            <div
                                key={index}
                                className="relative w-[220px] h-[150px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-transform"
                            >
                                <img
                                    src={card.image}
                                    alt={`Destination ${index + 1}`}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                    {card.price}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Services;
