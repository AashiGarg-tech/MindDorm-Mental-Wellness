// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// // 1. YOUR NEW PAGES (Correctly mapped to pages/Support)
// import HomePage from "./pages/Support/HomePage"; 
// import CallAway from "./pages/Support/CallAway"; 
// import PathwaysToWellness from "./pages/Support/PathwaysToWellness"; 

// // --- Existing Imports (FINAL CORRECTED PATHS) ---
// import Header from "./components/Header";

// // Corrected Path/Casing 1: articles_page.jsx is lowercase
// import ArticlesPage from "./pages/Resources/articles_page"; 

// // Corrected Path/Casing 2: Folder is LoginPage, not Login
// import AuthPage from "./pages/LoginPage/AuthPage"; 

// // Imports using known/standard paths based on file structure image:
// import WellnessDashboard from "./pages/UserDashBoard/WellnessDashboard";
// import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
// import AnnouncementsPage from "./pages/Community/AnnouncementsPage";
// import ListenLearnPage from "./pages/Community/ListenLearnPage";
// import ReachOutPage from "./pages/Community/ReachOutPage";
// import CommunityHeader from "./pages/Community/CommunityHeader";
// import ChatPage from "./pages/ChatBot/ChatPage";

// const AppContent = () => {
//   const location = useLocation();

//   // Hide header logic (Original repo logic: Hides header on the AuthPage "/")
//   const hideHeader = location.pathname === "/"; 

//   return (
//     // Uses the gradient background from your custom setup
//     <div className="min-h-screen font-sans bg-gradient-to-b from-blue-200 via-blue-100 to-white">
//       {/* Conditionally render header based on path */}
//       {!hideHeader && <Header />} 
      
//       <Routes>
//         {/* EXISTING ROUTES: (AuthPage loads first on /) */}
//         <Route path="/" element={<AuthPage />} /> 
//         <Route path="/ArticlesPage" element={<ArticlesPage />} />
//         <Route path="/WellnessDashboard" element={<WellnessDashboard />} />
//         <Route path="/AdminDashboard" element={<AdminDashboard />} />
//         <Route path="/AnnouncementsPage" element={<AnnouncementsPage />} />
//         <Route path="/ListenLearnPage" element={<ListenLearnPage />} />
//         <Route path="/ReachOutPage" element={<ReachOutPage />} />
//         <Route path="/CommunityHeader" element={<CommunityHeader />} />
//         <Route path="/ChatPage" element={<ChatPage />} />
        
//         {/* YOUR NEW ROUTES: */}
        
//         <Route path="/home" element={<HomePage />} /> 
//         <Route path="/lifeline" element={<CallAway />} />
//         <Route path="/find-wellness" element={<PathwaysToWellness />} />

//         {/* Optional: Fallback for any other path */}
//         <Route path="*" element={<div>Page Not Found</div>} />

//       </Routes>
//     </div>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import AuthPage from "./pages/LoginPage/AuthPage";

import HomePage from "./pages/Home/HomePage";

import SupportPage from "./pages/Support/SupportPage";  
import WellnessCard from "./pages/Support/WellnessCard";
import ResourceIcon from "./pages/Support/ResourceIcon";  
import CallAway from "./pages/Support/CallAway";
import PathwaysToWellness from "./pages/Support/PathwaysToWellness";

import SupportOptions from "./pages/Resources/support_condition";
import ArticlesPage from "./pages/Resources/articles_page";
import AudioPage from "./pages/Resources/audio_page";
import VideosPage from "./pages/Resources/video_page";

import WellnessDashboard from "./pages/UserDashboard/WellnessDashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

import AnnouncementsPage from "./pages/Community/AnnouncementsPage";
import ListenLearnPage from "./pages/Community/ListenLearnPage";
import ReachOutPage from "./pages/Community/ReachOutPage";
import CommunityHeader from "./pages/Community/CommunityHeader";

import ChatPage from "./pages/ChatBot/ChatPage";

import TrackMoodPage from "./pages/TrackMood/TrackMoodPage";

const AppContent = () => {
  const location = useLocation();
  const hideHeader = location.pathname === "/";

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-[#B5D8EB] to-[#F4F8FB]">
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/lifeline" element={<CallAway />} />
        <Route path="/find-wellness" element={<PathwaysToWellness />} />
        <Route path="/ChatPage" element={<ChatPage />} />
        <Route path="/AnnouncementsPage" element={<AnnouncementsPage />} />
        <Route path="/ListenLearnPage" element={<ListenLearnPage />} />
        <Route path="/ReachOutPage" element={<ReachOutPage />} />
        <Route path="/CommunityHeader" element={<CommunityHeader />} />
        <Route path="/SupportOptions" element={<SupportOptions />} />
        <Route path="/WellnessCard" element={<WellnessCard />} />
        <Route path="/SupportPage" element={<SupportPage />} />
        <Route path="/ResourceIcon" element={<ResourceIcon />} />
        <Route path="/ArticlesPage" element={<ArticlesPage />} />
        <Route path="/AudioPage" element={<AudioPage />} />
        <Route path="/VideosPage" element={<VideosPage />} />
        <Route path="/TrackMoodPage" element={<TrackMoodPage />} />
        <Route path="/WellnessDashboard" element={<WellnessDashboard />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="*" element={<div className="text-center py-20 text-gray-600 text-xl">🚧 Page Not Found</div>} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
