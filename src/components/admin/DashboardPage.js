import React from 'react';

function DashboardPage() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="stat-box">Total Products</div>
        <div className="stat-box">Pending Orders</div>
        <div className="stat-box">New Users</div>
      </div>
    </div>
  );
}

export default DashboardPage;
