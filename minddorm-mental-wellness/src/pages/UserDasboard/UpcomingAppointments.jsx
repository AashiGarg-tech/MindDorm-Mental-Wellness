import React from 'react';
import { Calendar, UserCircle } from 'lucide-react';

const AppointmentRow = ({ doctor, date, time, status }) => {
  const statusClasses = {
    Pending: 'bg-yellow-100 text-yellow-700',
    Confirmed: 'bg-green-100 text-green-700',
  };

  return (
    <div className="flex justify-between items-center py-4 border-b last:border-b-0">
      <div className="flex items-center space-x-3">
        <UserCircle className="w-8 h-8 text-blue-400" />
        <div>
          <p className="text-gray-800 font-medium">Dr {doctor}</p>
          <p className="text-sm text-gray-500">
            {date}, {time}
          </p>
        </div>
      </div>
      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusClasses[status]}`}>
        {status}
      </span>
    </div>
  );
};

const UpcomingAppointments = () => {
  const appointments = [
    { doctor: 'Pratibha', date: 'Oct 20', time: '2:00 PM', status: 'Pending' },
    { doctor: 'Vinod', date: 'Oct 1', time: '10:00 AM', status: 'Confirmed' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <div className="flex items-center space-x-2 mb-4">
        <Calendar className="text-gray-600 w-5 h-5" />
        <h2 className="text-xl font-semibold text-gray-800">Upcoming Appointments</h2>
      </div>
      
      <div>
        {appointments.map((item, index) => (
          <AppointmentRow
            key={index}
            doctor={item.doctor}
            date={item.date}
            time={item.time}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingAppointments;