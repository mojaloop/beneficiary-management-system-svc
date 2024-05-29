import React, { useState } from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import { Link } from 'react-router-dom';
import config from './config.json';

const NewBeneficiariesPage: React.FC = () => {
  // Simulated data from API
  const [beneficiaries, setBeneficiaries] = useState(config.beneficiaries);

  const handleRegisterToken = (index: number) => {
    // Simulated API call to register token
    // Update the status of the beneficiary
    const updatedBeneficiaries = [...beneficiaries];
    updatedBeneficiaries[index].status = 'Registered';
    setBeneficiaries(updatedBeneficiaries);
  };

  const handleChangePaymentToken = (index: number) => {
    // Simulated API call to change payment token
    // Update the status of the beneficiary
    const updatedBeneficiaries = [...beneficiaries];
    updatedBeneficiaries[index].status = 'Not Registered';
    setBeneficiaries(updatedBeneficiaries);
  };

  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: '21%' }}>
        <Header />
        <div className="w3-container">
          <h2>Beneficiaries</h2>
          <table className="w3-table-all w3-card-4">
            <thead>
              <tr className='w3-teal'>
                <th>Name</th>
                <th>ID</th>
                <th>Token</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {beneficiaries.map((beneficiary, index) => (
                <tr key={index} className='w3-hover-green'>
                  <td>{beneficiary.name}</td>
                  <td>{beneficiary.id}</td>
                  <td>{beneficiary.token}</td>
                  <td>{beneficiary.status}</td>
                  <td>
                    {beneficiary.status === 'Registered' ? (
                      <button onClick={() => handleChangePaymentToken(index)} style={{ backgroundColor: 'green' }}>
                        Change Payment Token
                      </button>
                    ) : (
                      <button onClick={() => window.location.href = config.registerTokenUrl + beneficiary.id} className="w3-button w3-red">
                            Register Token
                          </button>

                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NewBeneficiariesPage;
