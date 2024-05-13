import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import History from "./history";
import Drinks from "./Drinks";
import Contact from "./contact";
import Links from "./Links";
import Footer from "./Footer";
import Employees from "./Employees";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = {
    home: "",
    history: "",
    drinks: "",
    employees: "",
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
      {activeSection === "drinks" && <Drinks />}
      {activeSection === "employees" && <Employees />}
      {activeSection === "contact" && <Contact />}
      {activeSection === "links" && <Links />}
      <Footer />
    </div>
  );
}

export default App;