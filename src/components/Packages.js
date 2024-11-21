import React from 'react';

const Packages = () => {
    const packages = [
        {
            name: 'Switzerland',
            image: 'https://images.unsplash.com/photo-1690626818900-faf22dd53474?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 1000,
            discountPrice: 1200,
        },
        {
            name: 'Amazon',
            image: 'https://plus.unsplash.com/premium_photo-1674866806759-c19b7fca7bda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 1223,
            discountPrice: 1500,
        },
        {
            name: 'Giza',
            image: 'https://images.unsplash.com/photo-1663867502098-9c6cf1e16b6c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            price: 1200,
            discountPrice: 1400,
        },
    ];

    return (
        <section id="packages" className="py-16">
            <div className="container mx-auto text-center px-10">
                <h2 className="text-3xl font-bold">Our Trending Tour Packages</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8 mx-auto scale-90">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded overflow-hidden"
                        >
                            <img
                                src={pkg.image}
                                alt={pkg.name}
                                className="w-full h-52 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold">{pkg.name}</h3>
                                <p className="text-gray-500 line-through">${pkg.discountPrice}</p>
                                <p className="text-red-500 text-2xl">${pkg.price}</p>
                                <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">
                                    Explore Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

};

export default Packages;
