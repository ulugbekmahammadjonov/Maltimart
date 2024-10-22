import React, { useEffect, useRef } from "react";

import "./header.css";
import logo from "../../assets/images/eco-logo.png";
import user_icon from "../../assets/images/user-icon.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Container, Row } from "reactstrap";

import useAuth from "../../custom-hooks/useAuth";

import { motion } from "framer-motion";

import { useSelector } from "react-redux";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
const nav_links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const profileActionRef = useRef(null);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });
  const menuToggle = () => {
    menuRef.current.classList.toggle("active_menu");
  };

  const profileActionToggle = () => {
    profileActionRef.current.classList.toggle("show_profileActions");
  };
  const logout = () => {
    signOut(auth).then(() => {
      toast.success("Logged out");
      navigate("/home");
      console.log(currentUser);
    }).catch((error) => {
      toast.error(error.message);
    });
    
    
  };
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav_links.map((nav_link) => (
                  <li className="nav_item">
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive ? "nav_active" : ""
                      }
                      to={nav_link.path}
                    >
                      {nav_link.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav_icons">
              <span className="fav_icon">
                <i class="ri-heart-line"></i>
                <span className="badge">0</span>
              </span>
              <span className="cart_icon" onClick={() => navigate("/cart")}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity} </span>
              </span>
              <div className="profile" onClick={profileActionToggle}>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={user_icon}
                  alt="user"
                />
                <div className="profile_actions" ref={profileActionRef}>
                  {currentUser ? (
                    <p onClick={logout}>Logout</p>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <Link to="/signup">Signup</Link>
                      <Link to="/login">Login</Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
