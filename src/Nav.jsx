import React from 'react';
// import './Nav.css';

const Nav = ({ setActiveSection }) => {
  const handleNavClick = (section) => (e) => {
    e.preventDefault();  // Prevent the default anchor behavior
    setActiveSection(section);
  };

  return (
    <nav className="navBar">
      <a href="#home" onClick={handleNavClick("home")}>Home</a>
      <a href="#history" onClick={handleNavClick("history")}>Company History</a>
      <a href="#menu" onClick={handleNavClick("menu")}>Our Menu</a>
      <a href="#staff" onClick={handleNavClick("staff")}>Staff</a>
      <a href="#contact" onClick={handleNavClick("contact")}>Contact Us</a>
      <a href="#links" onClick={handleNavClick("links")}>External Links</a>
    </nav>
  );
};

export default Nav;
