import React from "react";
import WellnessDashboard from "./pages/UserDasboard/WellnessDashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <WellnessDashboard /> */}
          <AdminDashboard />
      </header>
    </div>
  );
}

export default App;
