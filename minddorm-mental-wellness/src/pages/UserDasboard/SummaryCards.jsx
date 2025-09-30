import React from 'react';

const SummaryCard = ({ title, value, unit, bgColor, textColor }) => (
  <div className={`p-4 rounded-lg shadow-md ${bgColor} text-white`}>
    <p className={`text-sm opacity-90 ${textColor}`}>{title}</p>
    <p className="text-3xl font-bold mt-1">
      {value}
      {unit && <span className="text-lg font-light ml-1">{unit}</span>}
    </p>
  </div>
);

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <SummaryCard
        title="Current Streak"
        value="20"
        unit="days"
        bgColor="bg-teal-500" // Light blue/teal background
        textColor="text-white"
      />
      <SummaryCard
        title="Average Mood"
        value="3.6"
        unit="/5"
        bgColor="bg-green-600" // Green background
        textColor="text-white"
      />
      <SummaryCard
        title="Sessions attended"
        value="1"
        bgColor="bg-purple-600" // Purple background
        textColor="text-white"
      />
    </div>
  );
};

export default SummaryCards;