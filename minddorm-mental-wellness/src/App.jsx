import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// 1. FIXED IMPORTS: POINTING TO THE CORRECT 'pages/Support' FOLDER
import HomePage from "./pages/Support/HomePage"; 
import CallAway from "./pages/Support/CallAway"; 
import PathwaysToWellness from "./pages/Support/PathwaysToWellness"; 

// --- Existing Imports (These paths are assumed to be correct for the repository) ---
import Header from "./components/Header";
import ArticlesPage from "./pages/Resources/ArticlesPage"; 
import WellnessDashboard from "./pages/UserDasboard/WellnessDashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AnnouncementsPage from "./pages/Community/AnnouncementsPage";
import ListenLearnPage from "./pages/Community/ListenLearnPage";
import ReachOutPage from "./pages/Community/ReachOutPage";
import CommunityHeader from "./pages/Community/CommunityHeader";
import ChatPage from "./pages/ChatBot/ChatPage";
import AuthPage from "./pages/Login/AuthPage"; // Note: This page is currently set to the root path /

const AppContent = () => {
  const location = useLocation();

  // Hide header logic (The original repo hides the header on the AuthPage "/")
  const hideHeader = location.pathname === "/"; 

  return (
    // Uses the gradient background from your custom setup
    <div className="min-h-screen font-sans bg-gradient-to-b from-blue-200 via-blue-100 to-white">
      {/* Conditionally render header based on path */}
      {/* The repository structure uses a custom Header component */}
      {!hideHeader && <Header />} 
      
      <Routes>
        {/* EXISTING ROUTES: (AuthPage loads first on /) */}
        <Route path="/" element={<AuthPage />} /> 
        <Route path="/ArticlesPage" element={<ArticlesPage />} />
        <Route path="/WellnessDashboard" element={<WellnessDashboard />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/AnnouncementsPage" element={<AnnouncementsPage />} />
        <Route path="/ListenLearnPage" element={<ListenLearnPage />} />
        <Route path="/ReachOutPage" element={<ReachOutPage />} />
        <Route path="/CommunityHeader" element={<CommunityHeader />} />
        <Route path="/ChatPage" element={<ChatPage />} />
        
        {/* NEW ROUTES FOR YOUR PAGES: */}
        
        {/* The HOME page is now accessible at /home */}
        <Route path="/home" element={<HomePage />} /> 
        
        {/* The LIFELINE page (CallAway) */}
        <Route path="/lifeline" element={<CallAway />} />
        
        {/* The FIND WELLNESS page (PathwaysToWellness) */}
        <Route path="/find-wellness" element={<PathwaysToWellness />} />

        {/* Optional: Fallback for any other path */}
        <Route path="*" element={<div>Page Not Found</div>} />

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
