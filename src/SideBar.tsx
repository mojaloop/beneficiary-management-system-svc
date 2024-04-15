import React from 'react';
import logo from './mlogo.png'; // Import your logo image

const Sidebar: React.FC = () => {
  return (
    <div className="w3-sidebar w3-light-grey w3-bar-block w3-card-4" style={{ width: '21%', display: true ? 'block' : 'none' }}>        
      <img className="w3-bar-item" src={logo} alt="Logo" style={{ width: 300, height: 200 }} />
      <hr/>
      <h3 className="w3-bar-item">Menu</h3>
      <a href="/" className="w3-bar-item w3-button">New Beneficiaries</a>
            <a href="/registered-beneficiaries" className="w3-bar-item w3-button">Registered Beneficiaries</a>
            
    </div>
  );
};

export default Sidebar;
