import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/UpdateProduct';
import DeleteProduct from './pages/DeleteProduct';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/admin" element={<DashboardPage />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/update-product/:id" element={<UpdateProduct />} />
            <Route path="/delete-product/:id" element={<DeleteProduct />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
