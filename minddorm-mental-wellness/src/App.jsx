// import React from "react";
// import WellnessDashboard from "./pages/UserDasboard/WellnessDashboard";
// import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
// import HomePage from './pages/Home/HomePage';

// {/* <Route path="/" element={<HomePage />} /> */}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//           {/* <WellnessDashboard /> */}
//           <AdminDashboard />
//       </header>
//     </div>
//   );
// }

// export default App;




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./pages/Header"; // Optional: include your header
import HomePage from "./pages/Home/HomePage";
import ArticlesPage from "./pages/resources/articles_page";
import VideoPage from "./pages/resources/video_page";
import AudioPage from "./pages/resources/audio_page";
import SupportPage from "./pages/resources/support_condition";
import WellnessDashboard from "./pages/UserDasboard/WellnessDashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

function App() {
  return (
    <Router>
      <Header /> {/* Optional: persistent header across pages */}
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/articles_page" element={<ArticlesPage />} />
        <Route path="/video_page" element={<VideoPage />} />
        <Route path="/audio_page" element={<AudioPage />} />
        <Route path="/support_condition" element={<SupportPage />} />
        <Route path="/WellnessDashboard" element={<WellnessDashboard />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
