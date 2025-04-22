// src/components/ProductDetailsModal.js
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './ProductDetails.css'; // Create a CSS file for styling

const ProductDetailsModal = ({ product, onClose }) => {
  if (!product) return null; // If no product is selected, return null

  return (
    <div className="product-details-overlay">
      <FaTimes className="cancel-icon" onClick={onClose} />
      <motion.div className="product-details-content">
        <div className="product-details-header">
          <h1>{product.name}</h1>
        </div>
        <img src={product.image} alt={product.name} className="product-image" />
        <p>Price: ₹{product.price}</p>
        <p>Rating: {product.rating} ★</p>
        <p>Reviews: {product.reviews}</p>
        <button className="add-to-cart">Add to Cart</button>
      </motion.div>
    </div>
  );
};

export default ProductDetailsModal;