import React, { useState } from "react";
import "../UserProfile.css";
import { FaBox, FaMapMarkerAlt, FaTh, FaHome, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";
import Footer from "./Footer";

const UserProfile = () => {

    const navigate = useNavigate();
  const [activeMenu5, setActiveMenu5] = useState("orders");

  const menuItems5 = [
    { label: "My Orders", icon: <FaBox />, key: "orders", count: 0 },
    { label: "My Addresses", icon: <FaMapMarkerAlt />, key: "addresses", count: 0 },
    { label: "Continue shopping", icon: <FaTh />, key: "shopping" },
    { label: "Go to the Homepage", icon: <FaHome />, key: "home" },
    { label: "Log out", icon: <FaSignOutAlt />, key: "logout" },
  ];

  const renderRightContent5 = () => {
    switch (activeMenu5) {
      case "orders":
        return (
          <>
            <h2>My Orders</h2>
            <p>Display all your orders</p>
            <hr />
            <p>You haven't placed any orders yet.</p>
          </>
        );
      case "addresses":
        return (
          <>
            <h2>My Addresses</h2>
            <p>Here you can manage your addresses.</p>
          </>
        );
      case "shopping":
        return navigate('/shop')
      case "home":
        return navigate('/');
      case "logout":
        return navigate('/login')
      default:
        return null;
    }
  };

  return (
    <>
        <NavBar />
   
     <div className="about_heading">
                <div className="overlap"></div>
                <h1>My Account</h1>
            </div>
    <div className="user-profile5">
      <div className="user-profile5-left5">
        <div className="avatar5">tu</div>
        <div className="username5">
          Hi,<br />
          <span> TEST USER</span>
        </div>
        <div className="menu5">
          {menuItems5.map((item, index) => (
            <div
              key={index}
              className={`menu-item5 ${activeMenu5 === item.key ? "active5" : ""}`}
              onClick={() => setActiveMenu5(item.key)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {item.icon}
                {item.label}
              </div>
              {"count" in item && <span>{item.count}</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="user-profile5-right5">{renderRightContent5()}</div>
    </div>

        <Footer />
     </>
  );
};

export default UserProfile;
