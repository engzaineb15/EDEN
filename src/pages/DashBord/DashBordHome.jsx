import React from "react";
import "./DashBordHome.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";

const DashBordHome = () => {
  const barData = [
    { name: "China", value: 400 },
    { name: "Ger", value: 300 },
    { name: "Pol", value: 200 },
    { name: "Neth", value: 150 },
    { name: "Rus", value: 120 },
    { name: "USA", value: 100 },
    { name: "Fr", value: 80 },
    { name: "Belg", value: 60 },
    { name: "Braz", value: 40 },
    { name: "KSA", value: 20 },
  ];

  const pieData = [
    { name: "Profit", value: 1700 },
    { name: "Other", value: 300 },
  ];

  const COLORS = ["#0088FE", "#00C49F"];

  return (
    <div className="dashboard">
      <header className="header">
        <div className="logo">DE</div>
        <div className="iconsDash">
          <i className="fas fa-bell"></i>
          <i className="fas fa-user"></i>
        </div>
      </header>

      <div className="contentDash">
        <aside className="sidebarDash">

          <ul className="menuDash">
            <li>Dashboard</li>
            <li>Messages</li>
            <li>Analytics</li>
            <li>Tasks</li>
          </ul>
        </aside>

        <main className="main">
          <h1>Global Dashboard</h1>
          <div className="charts">
            <div className="bar-chart">
              <h2>Top 10 Export Countries</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3A80BA" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="pie-chart">
              <h2>NET Profit</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="info-cards">
            <div className="card">
              <h3>Average Price</h3>
              <p>5100 $</p>
            </div>
            <div className="card2">
              <h3>Competitors</h3>
              <p>
                <b>Mexico:</b> 21.3%<br />
                <b>USA:</b> 18%<br />
                <b>Spain:</b> 20.9%<br />
                <b>Netherlands:</b> 9.6%
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashBordHome;
