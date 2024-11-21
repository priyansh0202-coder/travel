import React from 'react'

function CreateYourOwnPackage({ onClose }) {

    const activities = [
        'Culture', 'Outdoors', 'Relaxing', 'Wildlife',
        'Romantic', 'Religious', 'Hiking', 'Musical',
        'Shopping', 'Business', 'Museums', 'Party',
        'Traditions', 'Walks', 'Fishing', 'Cruise',
        'Guide', 'Healthcare', 'Accommodation'
    ];


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Build Your Own Package</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 text-lg font-bold"
                    >
                        ✖
                    </button>
                </div>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Country</label>
                        <input
                            type="text"
                            placeholder="Switzerland"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">City</label>
                        <input
                            type="text"
                            placeholder="Lauterbrunnen"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex gap-4 mb-4">
                        <div className="flex-1">
                            <label className="block text-gray-700 font-medium">Start Date</label>
                            <input
                                type="date"
                                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-gray-700 font-medium">End Date</label>
                            <input
                                type="date"
                                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm text-gray-500">Activities preferences (optional)</p>
                        <div className="grid grid-cols-4 gap-2">
                            {activities.map((activity) => (
                                <div key={activity} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={activity}
                                        className="w-4 h-4 border-gray-300 rounded"
                                    />
                                    <label htmlFor={activity} className="ml-2 text-sm text-gray-600">
                                        {activity}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-2 rounded-lg font-bold hover:bg-red-600"
                    >
                        Build Package
                    </button>
                </form>
            </div>
        </div>
    );

};

export default CreateYourOwnPackage;

