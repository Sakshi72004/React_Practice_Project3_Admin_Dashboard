import {Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";

import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Analytics from "./Pages/Analytics";
import Products from "./Pages/Products";
import Inventory from "./Pages/Inventory";
import Offers from "./Pages/Offers";
import Sales from "./Pages/Sales";
import Customers from "./Pages/Customers";
import Newsletter from "./Pages/Newsletter";
import Settings from "./Pages/Settings";





function App() {
  return (
    
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        <Sidebar />

        <div className="flex-grow-1 p-4">
          <Topbar />

          <Routes>
            {/* Redirect root */}
            <Route path="/" element={<Navigate to="/dashboard" />} />

            {/* Pages */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/products" element={<Products />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/customer" element={<Customers />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/settings" element={<Settings />} />

          </Routes>
        </div>
      </div>
    
  );
}

export default App;
