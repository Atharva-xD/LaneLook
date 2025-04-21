import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import "../index.css";
import Home from "./NavLinks/Home";
import Shop from "./NavLinks/Shop";
import About from "./NavLinks/About";
import Contact from "./NavLinks/Contact";
import ShoppingCart from "./ShoppingCart";
import glasses1 from "../images/glasses1.jpg";
import glasses2 from "../images/glasses2.jpg";
import { FaSearch, FaShoppingCart, FaHeart, FaTimes } from "react-icons/fa";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOpen: false,
      cartOpen: false,
      wishList: false,
      cartVisible: false,
    };
  }

  handleWishlistClick = () => {
    this.setState({ wishList: !this.state.wishList });
    document.body.classList.toggle("wishlist-open");
  };

  handleWishlistCancel = () => {
    this.setState({ wishList: false });
    document.body.classList.remove("wishlist-open");
  };

  toggleCartVisibility = () => {
    this.setState({ cartVisible: !this.state.cartVisible });
  };

  handleSearchClick = () => {
    this.setState({ searchOpen: !this.state.searchOpen });
  };

  handleCancelClick = () => {
    this.setState({ searchOpen: false });
  };

  handleCartClick = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
    document.body.classList.toggle("cart-open");
  };

  handleCancelCart = () => {
    this.setState({ cartOpen: false });
    document.body.classList.remove("cart-open");
  };

  render() {
    return (
      <BrowserRouter>
        {/* Top Navbar */}
        <div className="top-navbar">
          <div className="container d-flex justify-content-between">
            <span>Free shipping for standard orders over ₹5000</span>
            <div>
              <a href="#">Help & FAQs</a>
              <a href="#">Sign In</a>
              <a href="#">EN</a>
              <a href="#">India</a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light main-navbar">
          <div className="container">
            <Link to="" className="navbar-brand">
              Lane Look
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/shop" className="nav-link">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="navbar-icons">
                <motion.div className="icon" whileHover={{ scale: 1.1 }}>
                  <FaSearch onClick={this.handleSearchClick} />
                </motion.div>
                <motion.div
                  className="icon cart-icon"
                  whileHover={{ scale: 1.1 }}
                  onClick={this.handleCartClick}
                >
                  <FaShoppingCart />
                </motion.div>
                <motion.div
                  className="icon heart-icon"
                  whileHover={{ scale: 1.1 }}
                  onClick={this.handleWishlistClick}
                >
                  <FaHeart />
                </motion.div>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/shop" element={<Shop />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<ShoppingCart />} />
          {/*<Route path="/features" component={Features} />
          <Route path="/blog" component={Blog} /> */}
        </Routes>

        {this.state.searchOpen && (
          <motion.div
            className="search-overlay"
            initial={{ y: -300 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="search-bar">
              <FaTimes
                className="cancel-icon"
                onClick={this.handleCancelClick}
              />
              <input type="search" placeholder="Search..." />
              <button>Search</button>
            </div>
          </motion.div>
        )}

        {this.state.cartOpen && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="cart-overlay"
          >
            <div className="container">
              <div className="cart-header">
                <h1>My Cart</h1>
                <FaTimes
                  className="cancel-icon"
                  onClick={this.handleCancelCart}
                />
              </div>
              <div className="cart-item-container">
                <div className="row">
                  <div className="cart-items">
                    <div className="img col-3 col-md-4">
                      <img
                        src={glasses1}
                        alt="glasses1"
                        className="img-fluid"
                      />
                    </div>
                    <div className="item-details">
                      <p className="p-title">Eyeglasses</p>
                      <p className="p-price">1 x ₹850</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="cart-items">
                    <div className="img col-3 col-md-4">
                      <img
                        src={glasses2}
                        alt="glasses2"
                        className="img-fluid"
                      />
                    </div>
                    <div className="item-details">
                      <p className="p-title">Eyeglasses</p>
                      <p className="p-price">1 x ₹850</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-footer">
                <div className="btns">
                  <button className="btn btn-primary">Checkout</button>
                  <button className="btn btn-secondary">
                    <Link
                      to="/cart"
                      className="text-decoration-none text-white"
                      onClick={() => {
                        this.handleCancelCart();
                      }}
                    >
                      View Cart
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {this.state.wishList && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="wishlist-overlay"
          >
            <div className="container">
              <div className="wishlist-header">
                <h1>My Wishlist</h1>
                <FaTimes
                  className="cancel-icon"
                  onClick={this.handleWishlistCancel}
                />
              </div>
              <div className="wishlist-item-container">
                <div className="row">
                  <div className="wishlist-items">
                    <div className="img col-3 col-md-4">
                      <img
                        src={glasses1}
                        alt="glasses1"
                        className="img-fluid"
                      />
                    </div>
                    <div className="item-details">
                      <p className="p-title">Eyeglasses</p>
                      <p className="p-price">1 x ₹850</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="wishlist-items">
                    <div className="img col-3 col-md-4">
                      <img
                        src={glasses2}
                        alt="glasses2"
                        className="img-fluid"
                      />
                    </div>
                    <div className="item-details">
                      <p className="p-title">Eyeglasses</p>
                      <p className="p-price">1 x ₹850</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wishlist-footer">
                <div className="btns">
                  <button className="btn btn-primary">Checkout</button>
                  <button className="btn btn-secondary">
                    <Link
                      to="/wishlist"
                      className="text-decoration-none text-white"
                      onClick={() => {
                        this.handleWishlistCancel();
                      }}
                    >
                      View Wishlist
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </BrowserRouter>
    );
  }
}

export default Navbar;
