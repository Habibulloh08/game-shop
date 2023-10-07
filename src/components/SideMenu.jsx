import React, { useState } from "react";
import "../staylCss/sideMenu.css";
import Navbar from "./Navbar";
import navListData from "../data/navListData";

const SideMenu = ({ active, sectionActive }) => {
  const [navData, setNavData] = useState(navListData);

  const handleNavOnClick = (id, target) => {
    const newNavData = navData.map((nav) => ({
      ...nav,
      active: nav._id === id,
    }));
    setNavData(newNavData);
    sectionActive(target);
  };

  return (
    <div className={`sideMenu ${active ? "active" : ""}`}>
      <a href="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Play</span>
      </a>
      <ul className="nav">
        {navData.map((item) => (
          <Navbar key={item._id} item={item} navOnClick={handleNavOnClick} />
        ))}
      </ul>
      <ul className="social">
        <li>
          <a href="https://instagram.com/karimov_khabibulloh?igshid=OGQ5ZDc2ODk2ZA==">
            <i class="bi bi-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Habibulloh08">
            <i class="bi bi-github"></i>
          </a>
        </li>
        <li>
          <a href="https://t.me/habibulloh90">
            <i className="bi bi-telegram"></i>
          </a>
        </li>
        {/* <li>
          <a href="#">
            <i className="bi bi-youtube"></i>
          </a>
        </li> */}
        <li>
          <a href="#" className="share">
            <i className="bi bi-share"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
