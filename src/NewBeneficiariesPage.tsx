import React, { useState } from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import { Link } from 'react-router-dom';

const NewBeneficiariesPage: React.FC = () => {
  // Simulated data from API
  const [beneficiaries, setBeneficiaries] = useState([
    { id: 'UG680720000289000000001', name: 'John Doe', token: '', status: 'Not Registered' },
    { id: 'CM2903E3E0WE', name: 'Alice Smith', token: '', status: 'Not Registered' },
    { id: '4589712365XY', name: 'Michael Johnson', token: '', status: 'Not Registered' },
{ id: 'QR7890PO123L', name: 'Emily Davis', token: '', status: 'Not Registered' },
{ id: 'ZX5678901234', name: 'Robert Wilson', token: '', status: 'Not Registered' },
{ id: 'AS3456789012', name: 'Sophia Martinez', token: '', status: 'Not Registered' },
{ id: 'OP9876543210', name: 'William Thompson', token: '', status: 'Not Registered' },
{ id: 'LK2345678901', name: 'Olivia Anderson', token: '', status: 'Not Registered' },
{ id: 'JH6789012345', name: 'James Taylor', token: '', status: 'Not Registered' },
{ id: 'EF0987654321', name: 'Emma Thomas', token: '', status: 'Not Registered' }
    // Add more beneficiaries as needed
  ]);

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
                          <button onClick={() => window.location.href = 'http://localhost:3007/auth?payeeId='+ beneficiary.id} className="w3-button w3-red">Register Token</button>                


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
