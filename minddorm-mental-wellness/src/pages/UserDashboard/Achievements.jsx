import React from 'react';
import { Award, CheckCircle, Calendar, Users } from 'lucide-react';

const AchievementItem = ({ icon: Icon, title, date, color }) => (
  <div className="flex items-center space-x-4 py-3 border-b last:border-b-0">
    <Icon className={`w-6 h-6 ${color}`} />
    <div>
      <p className="text-gray-800 font-medium">{title}</p>
      <p className="text-sm text-gray-500">Sep {date}</p>
    </div>
  </div>
);

const Achievements = () => {
  const achievements = [
    { icon: Award, title: 'Mood Master', date: 23, color: 'text-yellow-500' },
    { icon: CheckCircle, title: 'Completed 3 guided mediations', date: 23, color: 'text-blue-500' },
    { icon: Calendar, title: 'Week warrior', date: 8, color: 'text-green-500' },
    { icon: Users, title: 'First Check-in', date: 3, color: 'text-red-500' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Achievements</h2>
      <div className="space-y-1">
        {achievements.map((item, index) => (
          <AchievementItem 
            key={index}
            icon={item.icon}
            title={item.title}
            date={item.date}
            color={item.color}
          />
        ))}
      </div>
      <div className="mt-4 text-right"> 
        <button className="text-blue-500 text-sm font-medium hover:text-blue-700">
          View More..
        </button>
      </div>
    </div>
  );
};

export default Achievements;