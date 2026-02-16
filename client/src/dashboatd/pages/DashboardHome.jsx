import React from "react";
import { FaChartLine, FaEye, FaBullseye } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const data = [
  { name: "Oct 23", value: 60 },
  { name: "Oct 27", value: 72 },
  { name: "Oct 31", value: 65 },
  { name: "Nov 05", value: 75 },
  { name: "Nov 10", value: 82 },
  { name: "Nov 16", value: 90 }
];

const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
};

const DashboardHome = () => {
  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Segoe UI" }}>
      
      {/* SIDEBAR */}
      <div
        style={{
          width: "240px",
          background: "#1f2d3d",
          color: "white",
          padding: "20px"
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>ADMINSYS</h2>

        <p>📊 Dashboard</p>
        <p>📈 Analytics</p>
        <p>📦 Orders</p>
        <p>👥 Customers</p>
        <p>⚙ Settings</p>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, background: "#f4f6f9", padding: "25px" }}>
        
        <h2>Dashboard</h2>

        {/* ===== TOP CARDS ===== */}
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          
          <div style={{ ...cardStyle, flex: 1 }}>
            <FaEye size={28} color="#2196f3" />
            <h3>Impressions</h3>
            <h2>1,563</h2>
          </div>

          <div style={{ ...cardStyle, flex: 1 }}>
            <FaBullseye size={28} color="#4caf50" />
            <h3>Goal</h3>
            <h2>30,564</h2>
          </div>

          <div style={{ ...cardStyle, flex: 1 }}>
            <FaChartLine size={28} color="#ff9800" />
            <h3>Impact</h3>
            <h2>42.6%</h2>
          </div>
        </div>

        {/* ===== MAIN CHART ===== */}
        <div style={{ ...cardStyle, marginTop: "25px" }}>
          <h3>Deals Analytics</h3>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#2196f3" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* ===== BOTTOM STATS ===== */}
        <div style={{ display: "flex", gap: "20px", marginTop: "25px" }}>
          
          <div style={{ ...cardStyle, flex: 1 }}>
            <h4>Published Project</h4>
            <p>532 (+1.69%)</p>
          </div>

          <div style={{ ...cardStyle, flex: 1 }}>
            <h4>Completed Task</h4>
            <p>4,569 (-0.5%)</p>
          </div>

          <div style={{ ...cardStyle, flex: 1 }}>
            <h4>Successful Task</h4>
            <p>89%</p>
          </div>

          <div style={{ ...cardStyle, flex: 1 }}>
            <h4>Ongoing Project</h4>
            <p>365</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
