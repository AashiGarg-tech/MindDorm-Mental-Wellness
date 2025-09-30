import React from 'react';
import { FileText } from 'lucide-react';

const AssessmentRow = ({ name, date, score, isHigh }) => (
  <div className="flex justify-between items-center py-3 border-b last:border-b-0">
    <div>
      <p className="text-gray-800 font-medium">{name}</p>
      <p className="text-sm text-gray-500">Sep {date}</p>
    </div>
    <span 
      className={`font-semibold text-sm px-3 py-1 rounded-full ${
        isHigh ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
      }`}
    >
      Score: {score}
    </span>
  </div>
);

const AssessmentHistory = () => {
  const assessments = [
    { name: 'PHQ-9', date: 23, score: 9, isHigh: true },
    { name: 'GAD-7', date: 19, score: 7, isHigh: true },
    { name: 'GAD-7', date: 2, score: 4, isHigh: false },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <div className="flex items-center space-x-2 mb-4">
        <FileText className="text-gray-600 w-5 h-5" />
        <h2 className="text-xl font-semibold text-gray-800">Assessment History</h2>
      </div>
      
      <div>
        {assessments.map((item, index) => (
          <AssessmentRow 
            key={index}
            name={item.name}
            date={item.date}
            score={item.score}
            isHigh={item.isHigh}
          />
        ))}
      </div>
    </div>
  );
};

export default AssessmentHistory;