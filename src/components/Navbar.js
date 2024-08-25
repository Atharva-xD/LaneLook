import React, { useState } from "react";
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
      cartVisible: false,
    };
  }

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
      <>
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
            <a className="navbar-brand" href="">
              Lane Look
            </a>
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
                  <a className="nav-link home" aria-current="page" href="">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Shop
                  </a>
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
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="navbar-icons">
                <FaSearch className="icon" onClick={this.handleSearchClick} />
                <FaShoppingCart
                  className="icon cart-icon"
                  onClick={this.handleCartClick}
                />
                <FaHeart className="icon heart-icon" />
              </div>
            </div>
          </div>
        </nav>

        {this.state.searchOpen && (
          <div className="search-overlay">
            <div className="search-bar">
              <FaTimes
                className="cancel-icon"
                onClick={this.handleCancelClick}
              />
              <input type="search" placeholder="Search..." />
              <button>Search</button>
            </div>
          </div>
        )}

        {this.state.cartOpen && (
          <div className="cart-overlay">
            <div className="overlay-background" />
            <div className="container">
              <div className="cart-header">
                <div className="row">
                  <div className="cart-title">
                    <h1 className="col-6-md col-6">Your Cart</h1>
                    <FaTimes
                      className="cancelicon"
                      onClick={this.handleCancelCart}
                    />
                  </div>
                </div>
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
              </div>
              <div class="cart-footer">
                <div class="btns">
                  <button class="btn btn-primary">Checkout</button>
                  <button
                    class="btn btn-secondary"
                    onClick={this.toggleCartVisibility}
                  >
                    View Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {this.state.cartVisible && <ShoppingCart />}
      </>
    );
  }
}

export default Navbar;
