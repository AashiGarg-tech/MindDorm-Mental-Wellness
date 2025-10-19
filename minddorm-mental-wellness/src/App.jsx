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
import WellnessDashboard from "./pages/UserDasboard/WellnessDashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

function App() {
  return (
    <Router>
      <Header /> {/* Optional: persistent header across pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/WellnessDashboard" element={<WellnessDashboard />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;