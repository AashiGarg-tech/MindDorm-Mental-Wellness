import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/Home/HomePage";
import ArticlesPage from "./pages/Resources/articles_page"; 
import WellnessDashboard from "./pages/UserDasboard/WellnessDashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AnnouncementsPage from "./pages/Community/AnnouncementsPage";
import ListenLearnPage from "./pages/Community/ListenLearnPage";
import ReachOutPage from "./pages/Community/ReachOutPage";
import CommunityHeader from "./pages/Community/CommunityHeader";

function App() {
  return (
    <Router>
      {/* Wrap all pages in a container with gradient */}
      <div className="min-h-screen font-sans bg-gradient-to-b from-[#B5D8EB] to-[#F4F8FB]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/ArticlesPage" element={<ArticlesPage />} />
          <Route path="/WellnessDashboard" element={<WellnessDashboard />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/AnnouncementsPage" element={<AnnouncementsPage />} />
          <Route path="/ListenLearnPage" element={<ListenLearnPage />} />
          <Route path="/ReachOutPage" element={<ReachOutPage />} />
          <Route path="/CommunityHeader" element={<CommunityHeader />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
