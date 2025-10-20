import React from 'react';
import WellnessCard from './WellnessCard';
import ResourceIcon from './ResourceIcon'; // Assuming you have this component

// Helper function to create Google Maps URL from address
const getMapsUrl = (address) => {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
};


// Dummy data for the cards (matching the image)
const wellnessCenters = [
  {
    title: 'Campus Wellness Center',
    address: '123 University Ave, Building A',
    phone: '9899568987',
    services: ['Counseling', 'Workshops', 'Support Groups'],
    imageUrl: '/images/img1.jpg', 
    directionsUrl: getMapsUrl('123 University Ave, Building A, Campus Wellness Center'), // ADDED URL
  },
  {
    title: 'Student Health Services',
    address: '456 College Blvd, Health Center',
    phone: '8788599999',
    services: ['Referrals', 'Mental Health', 'Crisis Support'],
    imageUrl: '/images/img2.jpeg', 
    directionsUrl: getMapsUrl('456 College Blvd, Health Center, Student Health Services'), // ADDED URL
  },
  {
    title: 'Community Mental Health Center',
    address: '123 University Ave, Building A',
    phone: '99545879998',
    services: ['Therapy', 'Support Groups', 'Medication Management'],
    imageUrl: '/images/img3.jpeg', 
    directionsUrl: getMapsUrl('123 University Ave, Building A, Community Mental Health Center'), // ADDED URL
  },
];

// Dummy data for campus resources (matching the image)
const campusResources = [
    { icon: '🏠', title: 'Residence Hall Support', description: 'Resident life questions and issues. Contact your RA or Hall Directors.', contact: 'Contact Your RA or Hall Directors' },
    { icon: '🎓', title: 'Academic Success Center', description: 'Academic advising, counseling and study support.', contact: '(555) 234-5678' },
    { icon: '⚠️', title: 'Campus Safety', description: '24/7 safety issues and emergency response.', contact: '(555) 911-SAFE' },
    { icon: '♿', title: 'Disability Services', description: 'Student health accommodations and support services.', contact: '(555) 345-6789' },
]

const PathwaysToWellness = () => {
    // Assuming you have font-header-font defined from a previous step
    const headerFontClass = 'font-header-font'; // Use this if defined, otherwise use font-sans

    return (
        // Re-using the gradient background setup from the CallAway page for consistency
        <div className="min-h-screen py-10 font-sans bg-gradient-to-b from-blue-200 via-blue-100 to-white">
            {/* Main Title Section */}
            <header className="text-center mb-12">
                <h1 className={`text-3xl font-light text-blue-900 tracking-widest uppercase ${headerFontClass}`}>
                    Pathways To Wellness
                </h1>
                <p className="text-gray-600 mt-2 italic">
                    Your feelings are valid, Let's talk it out and find support together
                </p>
            </header>
            
            {/* Wellness Centers Section */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap justify-center lg:justify-between -m-3">
                    {wellnessCenters.map((center, index) => (
                        // Pass the new directionsUrl prop
                        <WellnessCard key={index} {...center} />
                    ))}
                </div>
            </section>

            {/* Campus Resources Section */}
            {/* This assumes ResourceIcon.jsx exists and is imported */}
            <section className="mt-16 pt-10 border-t border-gray-300">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
                    Campus Resources
                </h2>
                <div className="max-w-5xl mx-auto flex flex-wrap justify-center sm:justify-between px-4">
                    {/* Assuming ResourceIcon exists and is functional */}
                    {campusResources.map((resource, index) => (
                        <ResourceIcon key={index} {...resource} />
                    ))}
                </div>
            </section>

            {/* Footer / Closing Message */}
            <footer className="text-center mt-16 text-gray-600 text-sm">
                <p>Don't worry Be happy</p>
            </footer>
        </div>
    );
};

export default PathwaysToWellness;
