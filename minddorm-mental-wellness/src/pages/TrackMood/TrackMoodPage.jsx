// import React, { useState } from "react";
// import { Smile, Meh, Frown, CloudRain, Moon } from "lucide-react";

// const TrackMoodPage = () => {
//   const [selectedMood, setSelectedMood] = useState(null);
//   const [note, setNote] = useState("");

//   const moods = [
//     { id: 1, name: "Happy", icon: <Smile className="w-8 h-8 text-yellow-500" /> },
//     { id: 2, name: "Calm", icon: <Moon className="w-8 h-8 text-[#5AA7E8]" /> },
//     { id: 3, name: "Neutral", icon: <Meh className="w-8 h-8 text-gray-500" /> },
//     { id: 4, name: "Sad", icon: <Frown className="w-8 h-8 text-blue-500" /> },
//     { id: 5, name: "Anxious", icon: <CloudRain className="w-8 h-8 text-teal-500" /> },
//   ];

//   const tests = [
//     {
//       name: "PSS (Perceived Stress Scale)",
//       when: "If you often feel overwhelmed or pressured.",
//       result: "Measures how stressful your life currently feels.",
//       link: "https://docs.google.com/forms/d/e/1FAIpQLSfIQHnZ_hz0EM57kgjzdvrd_9dRT3yxOJgzbHSei-7u3B0btA/viewform?usp=header",
//     },
//     {
//       name: "PHQ-9 (Depression Test)",
//       when: "When you feel low, tired, or lose interest in activities.",
//       result: "Screens for depression symptoms and their severity.",
//       link: "https://docs.google.com/forms/d/e/1FAIpQLSdlTJMjr1FTYYMBviIOYZtIXrIK0wGFGFb_qTH0fkdKAnCAcw/viewform?usp=header",
//     },
//     {
//       name: "GAD-7 (Anxiety Test)",
//       when: "If you often worry, feel tense, or restless.",
//       result: "Assesses anxiety levels and emotional impact.",
//       link: "https://docs.google.com/forms/d/e/1FAIpQLSdgFxjjeu2EhQ0DvsGyK6MijoW0Ym8nF4EgpG3c5oD7WrnO-w/viewform?usp=header",
//     },
//   ];

//   const handleSave = () => {
//     console.log({
//       mood: selectedMood?.name,
//       note,
//       date: new Date().toISOString(),
//     });
//     setSelectedMood(null);
//     setNote("");
//   };

//   return (
//     <div className="min-h-screen font-sans bg-gradient-to-b from-[#B5D8EB] to-[#F4F8FB]">
//       <main className="container mx-auto px-4 py-8 space-y-6">
        
//         {/* Header */}
//         <div className="text-center space-y-4">
//           <h1 className="text-5xl font-semibold text-[#000459] leading-snug">
//             Your Feelings Deserve Space
//           </h1>
//           <p className="text-lg text-gray-600">
//             Track your mood, reflect gently, and explore assessments that support your emotional wellness—without judgment.
//           </p>
//           <p className="text-sm italic text-gray-500">
//             "Even on quiet days, your emotions speak. Listening is healing."
//           </p>
//         </div>

//           {/* Mood Tracker */}
//         <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6">
//           <div className="text-center">
//             <h2 className="text-3xl font-semibold text-[#000459] mb-2">
//               Select a Mood That Resonates
//             </h2>
//             <p className="text-sm text-gray-500">
//               Tap a mood and write a short note to reflect on your day.
//             </p>
//           </div>

//           <div className="flex justify-center gap-6 flex-wrap relative z-10">
//             {moods.map((mood) => (
//               <button
//                 key={mood.id}
//                 onClick={() => setSelectedMood(mood)}
//                 className={`flex flex-col items-center gap-2 p-6 rounded-xl border transition-all transform hover:scale-105 ${
//                   selectedMood?.id === mood.id
//                     ? "bg-[#D6EAF4] border-[#5AA7E8] shadow-md scale-105"
//                     : "bg-gradient-to-b from-gray-50 to-white hover:from-[#E3F2FA] hover:to-[#F5FAFD] border-gray-200"
//                 }`}
//               >
//                 <div className="w-12 h-12 flex items-center justify-center">
//                   {mood.icon}
//                 </div>
//                 <span className="text-sm font-medium text-gray-700">{mood.name}</span>
//               </button>
//             ))}
//           </div>          <textarea
//             value={note}
//             onChange={(e) => setNote(e.target.value)}
//             placeholder="What’s been on your mind today? Any small wins or challenges?"
//             className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#5AA7E8] outline-none resize-none"
//             rows={3}
//           />

//           <div className="text-center">
//             <button
//               onClick={handleSave}
//               className="bg-[#5AA7E8] hover:bg-[#3F8BD1] text-white px-8 py-2.5 rounded-full font-medium transition-transform hover:scale-105"
//             >
//               Save Reflection
//             </button>
//           </div>
//         </div>

//         {/* Comfort Tip */}
//         <div className="max-w-3xl mx-auto bg-[#D6EAF4] border-l-4 border-[#5AA7E8] p-4 rounded-xl text-sm text-gray-700 shadow-sm">
//           🌱 <strong>Gentle Reminder:</strong> Your feelings are valid. Taking a moment to reflect is a powerful act of self-care.
//         </div>

//         {/* Assessments Section */}
//         <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 space-y-6 relative overflow-hidden">
//           <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-[#D6EAF4]/20 to-[#E3F2FA]/20"></div>
//           <div className="text-center space-y-2">
//             <h2 className="text-3xl font-bold text-[#000459]">
//               Gentle Self-Assessments
//             </h2>
//             <p className="text-md text-gray-600 max-w-3xl mx-auto">
//               These tools are here to help you understand your emotional patterns. Take them when you feel ready.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6 relative z-10">
//             {tests.map((test, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-gradient-to-b from-gray-50 to-white hover:from-[#E3F2FA] hover:to-[#F5FAFD] rounded-xl border border-gray-100 transition-all shadow-sm space-y-3 transform hover:scale-[1.02] hover:shadow-md"
//               >
//                 <div className="flex items-center gap-3 mb-2">
//                   <div className="w-10 h-10 rounded-full bg-[#5AA7E8]/10 flex items-center justify-center">
//                     <img src={`/test-${index + 1}.png`} alt={test.name} className="w-10 h-10 object-cover rounded-md" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-[#5AA7E8]">
//                     {test.name}
//                   </h3>
//                 </div>
//                 <p className="text-sm text-gray-700">
//                   <strong>When to take:</strong> {test.when}
//                 </p>
//                 <p className="text-sm text-gray-700">
//                   <strong>Purpose:</strong> {test.result}
//                 </p>
//                 <a
//                   href={test.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex items-center gap-2 mt-2 px-5 py-2 bg-[#5AA7E8] hover:bg-[#3F8BD1] text-white text-sm font-medium rounded-full transform transition-all hover:scale-105"
//                 >
//                   Take Test
//                   <span>→</span>
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//         <footer className="text-center mt-10 text-gray-600 text-sm">
//                 <p>Don't worry Be happy</p>
//             </footer>
//       </main>
//     </div>
//   );
// };

// export default TrackMoodPage;



// import React, { useState } from "react";
// import { Smile, Meh, Frown, CloudRain, Moon } from "lucide-react";
// import { Link } from "react-router-dom";

// const TrackMoodPage = () => {
//   const [selectedMood, setSelectedMood] = useState(null);
//   const [note, setNote] = useState("");

//   const moods = [
//     { id: 1, name: "Happy", icon: <Smile className="w-8 h-8 text-yellow-500" /> },
//     { id: 2, name: "Calm", icon: <Moon className="w-8 h-8 text-[#5AA7E8]" /> },
//     { id: 3, name: "Neutral", icon: <Meh className="w-8 h-8 text-gray-500" /> },
//     { id: 4, name: "Sad", icon: <Frown className="w-8 h-8 text-blue-500" /> },
//     { id: 5, name: "Anxious", icon: <CloudRain className="w-8 h-8 text-teal-500" /> },
//   ];

//   const handleSave = () => {
//     console.log({
//       mood: selectedMood?.name,
//       note,
//       date: new Date().toISOString(),
//     });
//     setSelectedMood(null);
//     setNote("");
//   };

//   const assessments = [
//     {
//       name: "PSS (Perceived Stress Scale)",
//       route: "/PSSAssessment",
//       when: "If you often feel overwhelmed or pressured.",
//       result: "Measures how stressful your life currently feels.",
//     },
//     {
//       name: "PHQ-9 (Depression Test)",
//       route: "/PHQ9Assessment",
//       when: "When you feel low, tired, or lose interest in activities.",
//       result: "Screens for depression symptoms and their severity.",
//     },
//     {
//       name: "GAD-7 (Anxiety Test)",
//       route: "/GAD7Assessment",
//       when: "If you often worry, feel tense, or restless.",
//       result: "Assesses anxiety levels and emotional impact.",
//     },
//   ];

//   return (
//     <div className="min-h-screen font-sans bg-gradient-to-b from-[#B5D8EB] to-[#F4F8FB]">
//       <main className="container mx-auto px-4 py-8 space-y-6">
//         {/* Header */}
//         <div className="text-center space-y-4">
//           <h1 className="text-5xl font-semibold text-[#000459] leading-snug">
//             Your Feelings Deserve Space
//           </h1>
//           <p className="text-lg text-gray-600">
//             Track your mood, reflect gently, and explore assessments that support your emotional wellness—without judgment.
//           </p>
//           <p className="text-sm italic text-gray-500">
//             "Even on quiet days, your emotions speak. Listening is healing."
//           </p>
//         </div>

//         {/* Mood Tracker */}
//         <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6">
//           <div className="text-center">
//             <h2 className="text-3xl font-semibold text-[#000459] mb-2">
//               Select a Mood That Resonates
//             </h2>
//             <p className="text-sm text-gray-500">
//               Tap a mood and write a short note to reflect on your day.
//             </p>
//           </div>

//           <div className="flex justify-center gap-6 flex-wrap relative z-10">
//             {moods.map((mood) => (
//               <button
//                 key={mood.id}
//                 onClick={() => setSelectedMood(mood)}
//                 className={`flex flex-col items-center gap-2 p-6 rounded-xl border transition-all transform hover:scale-105 ${
//                   selectedMood?.id === mood.id
//                     ? "bg-[#D6EAF4] border-[#5AA7E8] shadow-md scale-105"
//                     : "bg-gradient-to-b from-gray-50 to-white hover:from-[#E3F2FA] hover:to-[#F5FAFD] border-gray-200"
//                 }`}
//               >
//                 <div className="w-12 h-12 flex items-center justify-center">
//                   {mood.icon}
//                 </div>
//                 <span className="text-sm font-medium text-gray-700">{mood.name}</span>
//               </button>
//             ))}
//           </div>

//           <textarea
//             value={note}
//             onChange={(e) => setNote(e.target.value)}
//             placeholder="What’s been on your mind today? Any small wins or challenges?"
//             className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#5AA7E8] outline-none resize-none"
//             rows={3}
//           />

//           <div className="text-center">
//             <button
//               onClick={handleSave}
//               className="bg-[#5AA7E8] hover:bg-[#3F8BD1] text-white px-8 py-2.5 rounded-full font-medium transition-transform hover:scale-105"
//             >
//               Save Reflection
//             </button>
//           </div>
//         </div>

//         {/* Assessments */}
//         <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 space-y-6">
//           <div className="text-center space-y-2">
//             <h2 className="text-3xl font-bold text-[#000459]">Gentle Self-Assessments</h2>
//             <p className="text-md text-gray-600 max-w-3xl mx-auto">
//               These tools are here to help you understand your emotional patterns. Take them when you feel ready.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6">
//             {assessments.map((test, index) => (
//               <Link
//                 to={test.route}
//                 key={index}
//                 className="p-6 bg-gradient-to-b from-gray-50 to-white hover:from-[#E3F2FA] hover:to-[#F5FAFD] rounded-xl border border-gray-100 transition-all shadow-sm space-y-3 transform hover:scale-[1.02] hover:shadow-md"
//               >
//                 <h3 className="text-lg font-semibold text-[#5AA7E8]">{test.name}</h3>
//                 <p className="text-sm text-gray-700"><strong>When to take:</strong> {test.when}</p>
//                 <p className="text-sm text-gray-700"><strong>Purpose:</strong> {test.result}</p>
//                 <div className="inline-flex items-center gap-2 mt-2 px-5 py-2 bg-[#5AA7E8] hover:bg-[#3F8BD1] text-white text-sm font-medium rounded-full">
//                   Begin Assessment →
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>

//         <footer className="text-center mt-10 text-gray-600 text-sm">
//           <p>Don't worry Be happy</p>
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default TrackMoodPage;

// import React, { useState } from "react";
// import { Smile, Meh, Frown, CloudRain, Moon } from "lucide-react";
// // import { Link } from "react-router-dom"; // REMOVED: Caused routing error

// const TrackMoodPage = () => {
//   const [selectedMood, setSelectedMood] = useState(null);
//   const [note, setNote] = useState("");
//   // 👇 ADDED: State to manage loading state during API call
//   const [isLoading, setIsLoading] = useState(false);
//   // 👇 ADDED: State to manage feedback message
//   const [feedback, setFeedback] = useState({ message: '', type: '' });


//   const moods = [
//     { id: 1, name: "Happy", icon: <Smile className="w-8 h-8 text-yellow-500" /> },
//     { id: 2, name: "Calm", icon: <Moon className="w-8 h-8 text-[#5AA7E8]" /> },
//     { id: 3, name: "Neutral", icon: <Meh className="w-8 h-8 text-gray-500" /> },
//     { id: 4, name: "Sad", icon: <Frown className="w-8 h-8 text-blue-500" /> },
//     { id: 5, name: "Anxious", icon: <CloudRain className="w-8 h-8 text-teal-500" /> },
//   ];

//   // 👇 MODIFIED: handleSave now sends data to the backend
//   const handleSave = async () => {
//     setFeedback({ message: '', type: '' });

//     if (!selectedMood) {
//       setFeedback({ message: "Please select a mood before saving.", type: 'error' });
//       return;
//     }

//     // Retrieve JWT from local storage (or wherever you store it)
//     const userToken = localStorage.getItem('jwtToken');
//     if (!userToken) {
//         setFeedback({ message: "Error: You must be logged in to save your mood.", type: 'error' });
//         return;
//     }

//     const moodData = {
//         mood: selectedMood.name,
//         note: note,
//         // The date/time will be set by the backend for better accuracy
//     };

//     setIsLoading(true);

//     try {
//         const response = await fetch('/api/moods/track', { 
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 // Attach the JWT for the authenticateToken middleware
//                 'Authorization': `Bearer ${userToken}`, 
//             },
//             body: JSON.stringify(moodData),
//         });

//         if (response.ok) {
//             setFeedback({ message: "Reflection saved successfully! Keep tracking your emotional journey.", type: 'success' });
//             // Clear form on success
//             setSelectedMood(null);
//             setNote("");
//         } else {
//             const error = await response.json();
//             // Display specific error message from the backend
//             setFeedback({ 
//                 message: `Failed to save mood: ${error.message || 'Server error occurred.'}`, 
//                 type: 'error' 
//             });
//         }
//     } catch (error) {
//         console.error("Network or saving error:", error);
//         setFeedback({ message: "A network error occurred. Please check your connection.", type: 'error' });
//     } finally {
//         setIsLoading(false);
//     }
//   };
//   // 👆 END MODIFIED handleSave

//   const assessments = [
//     {
//       name: "PSS (Perceived Stress Scale)",
//       route: "/PSSAssessment",
//       when: "If you often feel overwhelmed or pressured.",
//       result: "Measures how stressful your life currently feels.",
//     },
//     {
//       name: "PHQ-9 (Depression Test)",
//       route: "/PHQ9Assessment",
//       when: "When you feel low, tired, or lose interest in activities.",
//       result: "Screens for depression symptoms and their severity.",
//     },
//     {
//       name: "GAD-7 (Anxiety Test)",
//       route: "/GAD7Assessment",
//       when: "If you often worry, feel tense, or restless.",
//       result: "Assesses anxiety levels and emotional impact.",
//     },
//   ];

//   return (
//     <div className="min-h-screen font-sans bg-gradient-to-b from-[#B5D8EB] to-[#F4F8FB]">
//       <main className="container mx-auto px-4 py-8 space-y-6">
//         {/* Header */}
//         <div className="text-center space-y-4">
//           <h1 className="text-5xl font-semibold text-[#000459] leading-snug">
//             Your Feelings Deserve Space
//           </h1>
//           <p className="text-lg text-gray-600">
//             Track your mood, reflect gently, and explore assessments that support your emotional wellness—without judgment.
//           </p>
//           <p className="text-sm italic text-gray-500">
//             "Even on quiet days, your emotions speak. Listening is healing."
//           </p>
//         </div>

//         {/* Mood Tracker */}
//         <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6">
//           <div className="text-center">
//             <h2 className="text-3xl font-semibold text-[#000459] mb-2">
//               Select a Mood That Resonates
//             </h2>
//             <p className="text-sm text-gray-500">
//               Tap a mood and write a short note to reflect on your day.
//             </p>
//           </div>
          
//           {/* 👇 FIXED: Ensure only feedback.message is rendered */}
//           {feedback.message && (
//             <div className={`p-3 rounded-xl text-center font-medium ${
//               feedback.type === 'success' 
//                 ? 'bg-green-100 text-green-700 border border-green-300' 
//                 : 'bg-red-100 text-red-700 border border-red-300'
//             }`}>
//               {feedback.message}
//             </div>
//           )}
//           {/* 👆 END FIXED */}

//           <div className="flex justify-center gap-6 flex-wrap relative z-10">
//             {moods.map((mood) => (
//               <button
//                 key={mood.id}
//                 onClick={() => setSelectedMood(mood)}
//                 // 👇 DISABLED: Disable buttons while loading
//                 disabled={isLoading} 
//                 className={`flex flex-col items-center gap-2 p-6 rounded-xl border transition-all transform hover:scale-105 ${
//                   selectedMood?.id === mood.id
//                     ? "bg-[#D6EAF4] border-[#5AA7E8] shadow-md scale-105"
//                     : "bg-gradient-to-b from-gray-50 to-white hover:from-[#E3F2FA] hover:to-[#F5FAFD] border-gray-200"
//                 } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
//               >
//                 <div className="w-12 h-12 flex items-center justify-center">
//                   {mood.icon}
//                 </div>
//                 <span className="text-sm font-medium text-gray-700">{mood.name}</span>
//               </button>
//             ))}
//           </div>

//           <textarea
//             value={note}
//             onChange={(e) => setNote(e.target.value)}
//             placeholder="What’s been on your mind today? Any small wins or challenges?"
//             className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#5AA7E8] outline-none resize-none"
//             rows={3}
//              // 👇 DISABLED: Disable input while loading
//              disabled={isLoading}
//           />

//           <div className="text-center">
//             <button
//               onClick={handleSave}
//               disabled={isLoading} // Disable button while loading
//               className={`bg-[#5AA7E8] text-white px-8 py-2.5 rounded-full font-medium transition-transform ${isLoading ? 'opacity-70 cursor-wait' : 'hover:bg-[#3F8BD1] hover:scale-105'}`}
//             >
//               {isLoading ? 'Saving...' : 'Save Reflection'}
//             </button>
//           </div>
//         </div>

//         {/* Assessments */}
//         <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 space-y-6">
//           <div className="text-center space-y-2">
//             <h2 className="text-3xl font-bold text-[#000459]">Gentle Self-Assessments</h2>
//             <p className="text-md text-gray-600 max-w-3xl mx-auto">
//               These tools are here to help you understand your emotional patterns. Take them when you feel ready.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6">
//             {assessments.map((test, index) => (
//               <div // FIXED: Replaced Link with simple div to avoid "Cannot destructure basename" error
//                 key={index}
//                 onClick={() => console.log(`Navigating to ${test.route}`)} // Simulate navigation
//                 className="p-6 bg-gradient-to-b from-gray-50 to-white hover:from-[#E3F2FA] hover:to-[#F5FAFD] rounded-xl border border-gray-100 transition-all shadow-sm space-y-3 transform hover:scale-[1.02] hover:shadow-md cursor-pointer"
//               >
//                 <h3 className="text-lg font-semibold text-[#5AA7E8]">{test.name}</h3>
//                 <p className="text-sm text-gray-700"><strong>When to take:</strong> {test.when}</p>
//                 <p className="text-sm text-gray-700"><strong>Purpose:</strong> {test.result}</p>
//                 <div className="inline-flex items-center gap-2 mt-2 px-5 py-2 bg-[#5AA7E8] hover:bg-[#3F8BD1] text-white text-sm font-medium rounded-full">
//                   Begin Assessment →
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <footer className="text-center mt-10 text-gray-600 text-sm">
//           <p>Don't worry Be happy</p>
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default TrackMoodPage;
import React, { useState } from "react";
import { Smile, Meh, Frown, CloudRain, Moon } from "lucide-react";

// Placeholder function for the user ID. 
// In a real application, this should come from a React Context or an authentication hook (like useAuth).
const getUserId = () => {
    // NOTE: Replace this mock ID with the actual ID from your authentication state!
    return '66f3e1b7f3d5b0a8c2f218a0'; 
};

const TrackMoodPage = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");
  const [message, setMessage] = useState(''); // State for success/error messages

  // --- FIX APPLIED HERE: Added '/track' suffix ---
  const API_URL = "http://localhost:5000/api/moods/track"; // Corrected backend endpoint

  const moods = [
    { id: 1, name: "Happy", icon: <Smile className="w-8 h-8 text-yellow-500" /> },
    { id: 2, name: "Calm", icon: <Moon className="w-8 h-8 text-[#5AA7E8]" /> },
    { id: 3, name: "Neutral", icon: <Meh className="w-8 h-8 text-gray-500" /> },
    { id: 4, name: "Sad", icon: <Frown className="w-8 h-8 text-blue-500" /> },
    { id: 5, name: "Anxious", icon: <CloudRain className="w-8 h-8 text-teal-500" /> },
  ];

  // --- UPDATED HANDLE SAVE FUNCTION ---
  const handleSave = async () => {
    if (!selectedMood) {
      setMessage({ type: 'error', text: 'Please select a mood before saving.' });
      return;
    }

    const userId = getUserId(); 
    if (!userId) {
        setMessage({ type: 'error', text: 'Authentication error: User ID not found.' });
        return;
    }

    setMessage({ type: 'info', text: 'Saving reflection...' });
    
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // NOTE: Your backend also requires the authenticateToken middleware, 
          // so a real application must include an Authorization header here.
          // For now, we rely on the mock user ID to pass the required data.
        },
        body: JSON.stringify({
          userId: userId,
          mood: selectedMood.name,
          note: note,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // If the server returns a 401 (Unauthorized) or 400 (Bad Request)
        throw new Error(data.message || 'Failed to save mood due to a server error.');
      }

      // Success
      setMessage({ type: 'success', text: `Mood "${selectedMood.name}" saved successfully!` });
      setSelectedMood(null);
      setNote("");

    } catch (error) {
      console.error("API Save Error:", error);
      setMessage({ type: 'error', text: `Could not save mood. Server responded with: (${error.message})` });
    }
  };

  const assessments = [
    {
      name: "PSS (Perceived Stress Scale)",
      route: "/PSSAssessment",
      when: "If you often feel overwhelmed or pressured.",
      result: "Measures how stressful your life currently feels.",
    },
    {
      name: "PHQ-9 (Depression Test)",
      route: "/PHQ9Assessment",
      when: "When you feel low, tired, or lose interest in activities.",
      result: "Screens for depression symptoms and their severity.",
    },
    {
      name: "GAD-7 (Anxiety Test)",
      route: "/GAD7Assessment",
      when: "If you often worry, feel tense, or restless.",
      result: "Assesses anxiety levels and emotional impact.",
    },
  ];

  const getMessageClass = () => {
    if (!message) return 'hidden';
    switch (message.type) {
        case 'success': return 'bg-green-100 border-green-400 text-green-700';
        case 'error': return 'bg-red-100 border-red-400 text-red-700';
        default: return 'bg-blue-100 border-blue-400 text-blue-700';
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-[#B5D8EB] to-[#F4F8FB]">
      <main className="container mx-auto px-4 py-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-semibold text-[#000459] leading-snug">
            Your Feelings Deserve Space
          </h1>
          <p className="text-lg text-gray-600">
            Track your mood, reflect gently, and explore assessments that support your emotional wellness—without judgment.
          </p>
          <p className="text-sm italic text-gray-500">
            "Even on quiet days, your emotions speak. Listening is healing."
          </p>
        </div>

        {/* Mood Tracker */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#000459] mb-2">
              Select a Mood That Resonates
            </h2>
            <p className="text-sm text-gray-500">
              Tap a mood and write a short note to reflect on your day.
            </p>
          </div>

          <div className="flex justify-center gap-6 flex-wrap relative z-10">
            {moods.map((mood) => (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood)}
                className={`flex flex-col items-center gap-2 p-6 rounded-xl border transition-all transform hover:scale-105 ${
                  selectedMood?.id === mood.id
                    ? "bg-[#D6EAF4] border-[#5AA7E8] shadow-md scale-105"
                    : "bg-gradient-to-b from-gray-50 to-white hover:from-[#E3F2FA] hover:to-[#F5FAFD] border-gray-200"
                }`}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  {mood.icon}
                </div>
                <span className="text-sm font-medium text-gray-700">{mood.name}</span>
              </button>
            ))}
          </div>
          
          {/* Status Message */}
          <div className={`p-3 border rounded-lg text-sm transition-all ${getMessageClass()}`}>
            {message.text}
          </div>

          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="What’s been on your mind today? Any small wins or challenges?"
            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#5AA7E8] outline-none resize-none"
            rows={3}
          />

          <div className="text-center">
            <button
              onClick={handleSave}
              className={`bg-[#5AA7E8] hover:bg-[#3F8BD1] text-white px-8 py-2.5 rounded-full font-medium transition-transform hover:scale-105 ${!selectedMood ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!selectedMood}
            >
              Save Reflection
            </button>
          </div>
        </div>

        {/* Assessments */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-[#000459]">Gentle Self-Assessments</h2>
            <p className="text-md text-gray-600 max-w-3xl mx-auto">
              These tools are here to help you understand your emotional patterns. Take them when you feel ready.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {assessments.map((test, index) => (
              // Using <div> instead of Link to prevent router errors
              <div
                key={index}
                className="p-6 bg-gradient-to-b from-gray-50 to-white hover:from-[#E3F2FA] hover:to-[#F5FAFD] rounded-xl border border-gray-100 transition-all shadow-sm space-y-3 transform hover:scale-[1.02] hover:shadow-md cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-[#5AA7E8]">{test.name}</h3>
                <p className="text-sm text-gray-700"><strong>When to take:</strong> {test.when}</p>
                <p className="text-sm text-gray-700"><strong>Purpose:</strong> {test.result}</p>
                <div className="inline-flex items-center gap-2 mt-2 px-5 py-2 bg-[#5AA7E8] hover:bg-[#3F8BD1] text-white text-sm font-medium rounded-full">
                  Begin Assessment →
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="text-center mt-10 text-gray-600 text-sm">
          <p>Don't worry Be happy</p>
        </footer>
      </main>
    </div>
  );
};

export default TrackMoodPage;

// import React, { useState, useEffect } from "react";
// import { Smile, Meh, Frown, CloudRain, Moon, X, CheckCircle } from "lucide-react";

// // NOTE: We are intentionally NOT using Link from react-router-dom here 
// // to prevent the "basename is null" error when running outside of a Router context.

// const TrackMoodPage = () => {
//   const [selectedMood, setSelectedMood] = useState(null);
//   const [note, setNote] = useState("");
//   const [message, setMessage] = useState(null); // { text, type: 'success' | 'error' }
//   const [isLoading, setIsLoading] = useState(false);

//   // Helper to retrieve the user's token after login
//   const getAuthToken = () => {
//     // In a real application, this checks where the token was saved during login.
//     const token = localStorage.getItem('token'); 
//     return token;
//   };

//   const moods = [
//     { id: 1, name: "Happy", icon: <Smile className="w-8 h-8 text-yellow-500" /> },
//     { id: 2, name: "Calm", icon: <Moon className="w-8 h-8 text-[#5AA7E8]" /> },
//     { id: 3, name: "Neutral", icon: <Meh className="w-8 h-8 text-gray-500" /> },
//     { id: 4, name: "Sad", icon: <Frown className="w-8 h-8 text-blue-500" /> },
//     { id: 5, name: "Anxious", icon: <CloudRain className="w-8 h-8 text-teal-500" /> },
//   ];

//   const handleSave = async () => {
//     const moodToSave = selectedMood?.name;
    
//     // Clear previous message
//     setMessage(null);

//     if (!moodToSave) {
//       setMessage({ text: "Please select a mood before saving.", type: 'error' });
//       return;
//     }

//     const token = getAuthToken();

//     // --- SECURITY CHECK (If no token is found, display error) ---
//     if (!token) {
//       setMessage({ text: "Please log in to save your mood.", type: 'error' });
//       return;
//     }
//     // ------------------------

//     const API_URL = "http://localhost:5000/api/moods/track"; // Corrected URL

//     try {
//       setIsLoading(true);

//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           // Send the JWT for the backend middleware to authenticate
//           "Authorization": `Bearer ${token}` // This sends the token to the backend
//         },
//         body: JSON.stringify({
//           mood: moodToSave,
//           note: note,
//           // We are still sending a placeholder userId, but the backend uses the userId from the JWT
//           userId: 'mock-user-id' 
//         }),
//       });

//       // We only try to parse JSON if the response status is NOT 401 or 403 (which often return a non-JSON string error)
//       if (response.status === 401 || response.status === 403) {
//           const errorText = await response.json().catch(() => ({ message: "Authentication failed. Check token validity." }));
//           setMessage({ text: `Could not save mood. Server responded with: (${errorText.message || 'Access denied.'})`, type: 'error' });
//           return;
//       }

//       const result = await response.json();
      
//       if (response.ok) {
//         // Success: Mood saved (201 Created)
//         setMessage({ text: `Mood '${moodToSave}' saved successfully!`, type: 'success' });
//         setSelectedMood(null);
//         setNote("");
//       } else {
//         // Server returned an error (e.g., 403 Daily Limit, 400 Validation)
//         const errorMessage = result.message || "Unknown server error.";
//         setMessage({ text: `Could not save mood. Server responded with: (${errorMessage})`, type: 'error' });
//       }

//     } catch (error) {
//       console.error("Fetch Error:", error);
//       setMessage({ text: "Connection error. Ensure the backend server is running.", type: 'error' });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const assessments = [
//     {
//       name: "PSS (Perceived Stress Scale)",
//       route: "/PSSAssessment",
//       when: "If you often feel overwhelmed or pressured.",
//       result: "Measures how stressful your life currently feels.",
//     },
//     {
//       name: "PHQ-9 (Depression Test)",
//       route: "/PHQ9Assessment",
//       when: "When you feel low, tired, or lose interest in activities.",
//       result: "Screens for depression symptoms and their severity.",
//     },
//     {
//       name: "GAD-7 (Anxiety Test)",
//       route: "/GAD7Assessment",
//       when: "If you often worry, feel tense, or restless.",
//       result: "Assesses anxiety levels and emotional impact.",
//     },
//   ];

//   return (
//     <div className="min-h-screen font-sans bg-gradient-to-b from-[#B5D8EB] to-[#F4F8FB]">
//       <main className="container mx-auto px-4 py-8 space-y-6">
        
//         {/* Header */}
//         <div className="text-center space-y-4">
//           <h1 className="text-5xl font-semibold text-[#000459] leading-snug">
//             Your Feelings Deserve Space
//           </h1>
//           <p className="text-lg text-gray-600">
//             Track your mood, reflect gently, and explore assessments that support your emotional wellness—without judgment.
//           </p>
//           <p className="text-sm italic text-gray-500">
//             "Even on quiet days, your emotions speak. Listening is healing."
//           </p>
//         </div>

//         {/* Mood Tracker Card */}
//         <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6">
//           <div className="text-center">
//             <h2 className="text-3xl font-semibold text-[#000459] mb-2">
//               Select a Mood That Resonates
//             </h2>
//             <p className="text-sm text-gray-500">
//               Tap a mood and write a short note to reflect on your day.
//             </p>
//           </div>

//           <div className="flex justify-center gap-6 flex-wrap relative z-10">
//             {moods.map((mood) => (
//               <button
//                 key={mood.id}
//                 onClick={() => setSelectedMood(mood)}
//                 className={`flex flex-col items-center gap-2 p-6 rounded-xl border transition-all transform hover:scale-105 ${
//                   selectedMood?.id === mood.id
//                     ? "bg-[#D6EAF4] border-[#5AA7E8] shadow-md scale-105"
//                     : "bg-gradient-to-b from-gray-50 to-white hover:from-[#E3F2FA] hover:to-[#F5FAFD] border-gray-200"
//                 }`}
//               >
//                 <div className="w-12 h-12 flex items-center justify-center">
//                   {mood.icon}
//                 </div>
//                 <span className="text-sm font-medium text-gray-700">{mood.name}</span>
//               </button>
//             ))}
//           </div>
          
//           {/* Status Message Display */}
//           {message && (
//             <div 
//               className={`p-3 rounded-lg flex items-center gap-3 ${
//                 message.type === 'success' 
//                   ? 'bg-green-100 border border-green-400 text-green-700' 
//                   : 'bg-red-100 border border-red-400 text-red-700'
//               }`}
//             >
//               {message.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <X className="w-5 h-5" />}
//               <p className="text-sm font-medium">{message.text}</p>
//             </div>
//           )}

//           <textarea
//             value={note}
//             onChange={(e) => setNote(e.target.value)}
//             placeholder="What’s been on your mind today? Any small wins or challenges?"
//             className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#5AA7E8] outline-none resize-none"
//             rows={3}
//             disabled={isLoading}
//           />

//           <div className="text-center">
//             <button
//               onClick={handleSave}
//               disabled={isLoading || !selectedMood}
//               className={`text-white px-8 py-2.5 rounded-full font-medium transition-transform hover:scale-105 ${
//                 isLoading || !selectedMood 
//                   ? 'bg-gray-400 cursor-not-allowed' 
//                   : 'bg-[#5AA7E8] hover:bg-[#3F8BD1]'
//               }`}
//             >
//               {isLoading ? 'Saving...' : 'Save Reflection'}
//             </button>
//           </div>
//         </div>

//         {/* Assessments */}
//         <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 space-y-6">
//           <div className="text-center space-y-2">
//             <h2 className="text-3xl font-bold text-[#000459]">Gentle Self-Assessments</h2>
//             <p className="text-md text-gray-600 max-w-3xl mx-auto">
//               These tools are here to help you understand your emotional patterns. Take them when you feel ready.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6">
//             {assessments.map((test, index) => (
//               <div
//                 key={index}
//                 // Use onClick for navigation instead of Link to avoid compilation error outside Router context
//                 // In your main application, you would replace this <div> with <Link to={test.route}>
//                 className="p-6 bg-gradient-to-b from-gray-50 to-white hover:from-[#E3F2FA] hover:to-[#F5FAFD] rounded-xl border border-gray-100 transition-all shadow-sm space-y-3 transform hover:scale-[1.02] hover:shadow-md cursor-pointer"
//                 onClick={() => console.log(`Attempting navigation to: ${test.route}`)}
//               >
//                 <h3 className="text-lg font-semibold text-[#5AA7E8]">{test.name}</h3>
//                 <p className="text-sm text-gray-700"><strong>When to take:</strong> {test.when}</p>
//                 <p className="text-sm text-gray-700"><strong>Purpose:</strong> {test.result}</p>
//                 <div className="inline-flex items-center gap-2 mt-2 px-5 py-2 bg-[#5AA7E8] hover:bg-[#3F8BD1] text-white text-sm font-medium rounded-full">
//                   Begin Assessment →
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <footer className="text-center mt-10 text-gray-600 text-sm">
//           <p>Don't worry Be happy</p>
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default TrackMoodPage;
