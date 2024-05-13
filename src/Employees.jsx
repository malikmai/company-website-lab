import React from 'react';
import './Employees.css';

function Employees() {
  const staffMembers = [
    { name: 'Alex Johnson', role: 'Founder & CEO', description: 'Alex brings a passion for coffee and community to Starbies, leading our vision forward.' },
    { name: 'Jamie Lee', role: 'Head Barista', description: 'With over a decade of coffee experience, Jamie crafts perfect drinks every time.' },
    { name: 'Chris Doe', role: 'Operations Manager', description: 'Chris ensures everything runs smoothly, from supplier relations to daily store operations.' },
    { name: 'Emma Smith', role: 'Customer Relations', description: 'Emma loves to make every customer smile and ensures the best service at Starbies.' }
  ];

  return (
    <div className="staffSection">
      <h2>Meet Our Team</h2>
      <div className="staffList">
        {staffMembers.map(member => (
          <div className="staffMember" key={member.name}>
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Employees;
