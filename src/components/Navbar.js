import React, { useState } from "react";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";
import Home from "../components/NavLinks/Home.js";
import Header from "./Header.js";
import ShoppingCart from "./ShoppingCart.js";
import glasses1 from "../images/glasses1.jpg";
import glasses2 from "../images/glasses2.jpg";
import { FaSearch, FaShoppingCart, FaHeart, FaTimes } from "react-icons/fa";
import Contact from "./NavLinks/Contact.js";
import About from "./NavLinks/About.js";
import { motion } from "framer-motion";
import Book from "./NavLinks/Book.js";
import SignIn from "./SignIn.js";
import Shop from "./NavLinks/Shop.js";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOpen: false,
      cartOpen: false,
      cartVisible: false,
      signInOpen: false,
      activeTab: "home", // add a new state property to keep track of the active tab
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

  handleTabClick = (tab) => {
    this.setState({ activeTab: tab });
  };

  handleViewCartClick = () => {
    return <Navigate to="/cart" />;
  };

  handleBrandClick = () => {
    this.handleTabClick("home");
  };

  handleSignInClick = () => {
    this.setState({ signInOpen: !this.state.signInOpen });
    document.body.classList.toggle("signin-open");
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
              <a onClick={this.handleSignInClick}>
                Sign In
              </a>
              <a href="#">EN</a>
              <a href="#">India</a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light main-navbar">
          <div className="container">
            <Link
              to="/"
              className="navbar-brand"
              onClick={this.handleBrandClick}
            >
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
                  <Link
                    to="/"
                    className={`nav-link ${
                      this.state.activeTab === "home" ? "active" : ""
                    }`}
                    onClick={() => this.handleTabClick("home")}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/shop"
                    className={`nav-link ${
                      this.state.activeTab === "shop" ? "active" : ""
                    }`}
                    onClick={() => this.handleTabClick("shop")}
                  >
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/features"
                    className={`nav-link ${
                      this.state.activeTab === "features" ? "active" : ""
                    }`}
                    onClick={() => this.handleTabClick("features")}
                  >
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/book"
                    className={`nav-link ${
                      this.state.activeTab === "blog" ? "active" : ""
                    }`}
                    onClick={() => this.handleTabClick("blog")}
                  >
                    Book Slot
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className={`nav-link ${
                      this.state.activeTab === "about" ? "active" : ""
                    }`}
                    onClick={() => this.handleTabClick("about")}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className={`nav-link ${
                      this.state.activeTab === "contact" ? "active" : ""
                    }`}
                    onClick={() => this.handleTabClick("contact")}
                  >
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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>

        {this.state.signInOpen && (
          <div className="signin-overlay">
            <div className="signin-header">
              <h1>Sign In</h1>
              <FaTimes
                className="cancel-icon"
                onClick={this.handleSignInClick}
              />
            </div>
            <div className="signin-content">
              <form>
                <label>Username:</label>
                <input type="text" />
                <br />
                <label>Password:</label>
                <input type="password" />
                <br />
                <button type="submit">Sign In</button>
                <p className="forgot-password">
                  <a href="#">Forgot password?</a>
                </p>
              </form>
            </div>
          </div>
        )}

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
