import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import History from "./history";
import Menu from "./menu";
import Staff from "./staff";
import Contact from "./contact";
import Links from "./Links";
import Footer from "./Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = {
    home: "",
    history: "",
    menu: "",
    staff: "",
    contact: "",
    links: "",
  };

  return (
    <div>
      <h1>Starbies</h1>
      <Nav setActiveSection={setActiveSection} />
      <hr />
      {activeSection === "home" && <Home />}
      {activeSection === "history" && <History />}
      {activeSection === "menu" && <Menu />}
      {activeSection === "staff" && <Staff />}
      {activeSection === "contact" && <Contact />}
      {activeSection === "links" && <Links />}
      <Footer />
    </div>
  );
}

export default App;