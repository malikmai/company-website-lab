import React from "react";
// import './Links.css';

function Links() {
  const externalLinks = [
    {
      name: "Coffee Brewing Techniques",
      url: "https://treescoffee.com/blog/2016/04/6-popular-methods-for-brewing-coffee-at-home/",
    },
    { name: "Our Coffee Suppliers", url: "https://gilliescoffee.com/" },
    {
      name: "Coffee Health Benefits",
      url: "https://www.healthline.com/nutrition/top-evidence-based-health-benefits-of-coffee",
    },
    {
      name: "Local Coffee Events",
      url: "https://www.ncausa.org/Industry-Resources/Events-Education-Networking/Industry-Calendar",
    },
  ];

  return (
    <div className="linksSection">
      <h2>Useful Links</h2>
      <ul>
        {externalLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Links;
