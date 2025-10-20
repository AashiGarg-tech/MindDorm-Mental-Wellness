import React from 'react';

const TipOfTheDay = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200 h-full">
      <h3 className="text-md font-semibold text-gray-700 mb-3 border-b pb-2">
        Tip of the day
      </h3>
      <p className="text-xl font-medium text-gray-800">
        Try a 5-minute meditation before bed tonight
      </p>
    </div>
  );
};

export default TipOfTheDay;