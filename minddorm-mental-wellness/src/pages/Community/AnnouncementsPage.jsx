import React from 'react';
import CommunityHeader from './CommunityHeader';

const AnnouncementsPage = () => {
  const announcements = [
    {
      id: 1,
      title: 'October 10 – World Mental Health Day',
      description: "Today, we're hosting live sessions and gentle yoga to honor this day. Join us to reflect, connect, and breathe."
    },
    {
      id: 2,
      title: 'June 21 – International Yoga Day',
      description: "Let's breathe in and out together. Exhale the stress of the month and return to your center."
    },
    {
      id: 3,
      title: 'September 7-13 – Suicide Prevention Week',
      description: "We're sharing stories of hope, healing, and quiet courage. Let's remind each other: you're not alone."
    },
    {
      id: 4,
      title: 'May – Mental Health Awareness Month',
      description: "A full month to run student-led campaigns, share resources, and create safe spaces for open conversations."
    },
    {
      id: 5,
      title: 'November 15-22 – Art for Awareness Week (suggested date)',
      description: "Express what words can't. Submit your artwork to help others feel seen and understood."
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-[#B5D8EB] to-[#F4F8FB]">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <CommunityHeader activeTab="announcements" />

        {/* Content Area */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 min-h-96">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-[#2B5A7A]">Announcements</h2>
            <div className="w-20 h-20">
              <img
                src="https://via.placeholder.com/80"
                alt="Announcements"
                className="rounded-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="border-b border-slate-200 pb-6 last:border-b-0"
              >
                <h3 className="font-bold text-[#2B5A7A] mb-2">
                  {announcement.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {announcement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-lg text-[#2B5A7A] mt-8 py-4">
          Don't worry Be happy
        </footer>
      </div>
    </div>
  );
};

export default AnnouncementsPage;
