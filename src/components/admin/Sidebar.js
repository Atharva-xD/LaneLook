import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin Portal</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
        <li><Link to="/update-product">Update Product</Link></li>
        <li><Link to="/delete-product">Delete Product</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
