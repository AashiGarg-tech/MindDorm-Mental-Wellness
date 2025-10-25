import React, { useState, useEffect } from 'react';
import { Smile } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MoodTrends = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Custom Recharts wrapper for clean styling
  const ChartContainer = ({ children }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 h-96">
      <div className="flex items-center space-x-2 mb-4">
        <Smile className="text-gray-600 w-5 h-5" />
        <h2 className="text-xl font-semibold text-gray-800">Mood trends</h2>
      </div>
      <div className="h-4/5">
        {children}
      </div>
    </div>
  );

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        // 🚨 FIX: Using the correct backend route and port
        const response = await fetch("http://localhost:5050/api/assessment/trends", {
          headers: {
            // 🚨 TODO: Include your Authorization header/token here
            // Example: "Authorization": `Bearer ${localStorage.getItem('authToken')}`
          }
        });

        if (!response.ok) {
          throw new Error("Failed to fetch assessment trends data. Status: " + response.status);
        }

        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Could not load chart data. Ensure backend is running.");
        setLoading(false);
      }
    };

    fetchChartData();
  }, []); // Empty dependency array means this runs once when the component mounts

  if (loading) {
    return <ChartContainer><div className="flex justify-center items-center h-full text-gray-500">Loading mood trends...</div></ChartContainer>;
  }

  if (error) {
    return <ChartContainer><div className="flex justify-center items-center h-full text-red-500">{error}</div></ChartContainer>;
  }

  if (data.length === 0) {
    return <ChartContainer><div className="flex flex-col justify-center items-center h-full text-gray-500">No assessment data recorded yet.</div></ChartContainer>;
  }


  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="date" stroke="#6b7280" angle={-15} textAnchor="end" height={50} />
          {/* YAxis domain set to a reasonable max score, assuming 21 is max for GAD/PHQ */}
          <YAxis stroke="#6b7280" domain={[0, 21]} /> 
          <Tooltip contentStyle={{ borderRadius: '8px', border: 'none' }} />
          <Legend wrapperStyle={{ paddingTop: '10px' }} />

          {/* Line for PHQ-9 scores (dataKey matches your SQL output) */}
          <Line 
            type="monotone" 
            dataKey="phq9_score" 
            name="PHQ-9" 
            stroke="#10b981" 
            strokeWidth={2}
            dot={false}
          />
          
          {/* Line for GAD-7 scores (dataKey matches your SQL output) */}
          <Line 
            type="monotone" 
            dataKey="gad7_score" 
            name="GAD-7" 
            stroke="#f59e0b" 
            strokeWidth={2}
            dot={false}
          />

          {/* Line for PSS scores (dataKey matches your SQL output) */}
          <Line 
            type="monotone" 
            dataKey="pss_score" 
            name="PSS" 
            stroke="#8b5cf6" 
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default MoodTrends;
