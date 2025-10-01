import React from 'react';

// Import the conceptual components
// import Header from '../Header';
import TipOfTheDay from './TipOfTheDay';
import SummaryCards from './SummaryCards';
import MoodTrends from './MoodTrends';
import Achievements from './Achievements';
import AssessmentHistory from './AssessmentHistory';
import UpcomingAppointments from './UpcomingAppointments';
import PreviousSessionsSummary from './PreviousSessionsSummary';

// WellnessDashboard.jsx (CORRECTED Layout)

const WellnessDashboard = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#B5D8EB] to-[#F4F8FB] font-sans">
        {/* <Header /> */}
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-5xl font-semibold text-[#000459] mb-8">
            Your Wellness Dashboard
          </h1>
  
          {/* 1. Summary Cards span full width, below the title */}
          <div className="mb-6">
            <SummaryCards />
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
  
            {/* LEFT COLUMN (lg:col-span-8) */}
            <div className="lg:col-span-8 space-y-6">
  
              {/* A. Tip of the Day sits at the top left, spanning a fixed width. */}
              {/* The original image structure is complex, but often, the Tip is either 
                  outside the grid or part of the main content area above the charts. */}
              <div className="w-full mb-6"> {/* Use w-full on small, w-1/3 on medium screens */}
                 <TipOfTheDay />
              </div>
  
              {/* B. Mood Chart (takes up the rest of the 8 columns) */}
              <MoodTrends />
  
              {/* C. Assessment History and Previous Sessions, side-by-side */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <AssessmentHistory />
                  <PreviousSessionsSummary />
              </div>
            </div>
  
            {/* RIGHT COLUMN (lg:col-span-4) */}
            <div className="lg:col-span-4 space-y-6">
              <Achievements />
              <UpcomingAppointments /> 
            </div>
  
          </div>
  
          <div className="text-center mt-12 text-gray-500 text-sm">
            Don't worry Be happy
          </div>
        </main>
      </div>
    );
  };
export default WellnessDashboard;