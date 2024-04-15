import React, { useState } from 'react';
import Sidebar from './SideBar';
import Header from './Header';

const RegisteredBeneficiariesPage: React.FC = () => {
  // Simulated data from API
  const [beneficiaries, setBeneficiaries] = useState([
    { id: 'UG680720000289000000001', name: 'John Doe', token: 'CM101343JW9EWE24',  status: 'Registered' },
    { id: '256784666443', name: 'Alice Smith', token: 'CM2903E3E0WE',  status: 'Registered' },
    { id: '256784666411', name: 'Michael Johnson', token: '4589712365XY', status: 'Registered' },
    { id: '256784666412', name: 'Emily Davis', token: 'QR7890PO123L', status: 'Registered' },
    { id: '256784666413', name: 'Robert Wilson', token: 'ZX5678901234', status: 'Registered' },
    { id: '256784666414', name: 'Sophia Martinez', token: 'AS3456789012', status: 'Registered' },
    { id: '256784666415', name: 'William Thompson', token: 'OP9876543210', status: 'Registered' },
    { id: '256784666416', name: 'Olivia Anderson', token: 'LK2345678901', status: 'Registered' },
    { id: '256784666417', name: 'James Taylor', token: 'JH6789012345', status: 'Registered' },
    { id: '256784666418', name: 'Emma Thomas', token: 'EF0987654321', status: 'Registered' }
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

  const [criteriaCheckboxes, setCriteriaCheckboxes] = useState([
    { label: 'Name', checked: true },
    { label: 'Address', checked: true },
    { label: 'Nationality', checked: true },
    { label: 'DOB', checked: true },
    { label: 'Email', checked: true },
    { label: 'Passport Number', checked: true },
    { label: 'Gender', checked: true },
    { label: 'Phone', checked: true },
  ]);

  const toggleCheckbox = (index: number) => {
    const updatedCheckboxes = [...criteriaCheckboxes];
    updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
    setCriteriaCheckboxes(updatedCheckboxes);
  };
  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: '21%' }}>
        <Header />
        <div> 
          

        <div className="w3-container w3-padding">
            <h3>Token Matching Criteria</h3>
            <div className="w3-row-padding">
              {criteriaCheckboxes.map((checkbox, index) => (
                <div key={index} className="w3-third">
                  <h4>{checkbox.label}</h4>
                  <div className="w3-light-grey w3-padding">
                    <input
                      type="checkbox"
                      className="w3-check"
                      checked={checkbox.checked}
                      onChange={() => toggleCheckbox(index)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                      <button onClick={() => handleChangePaymentToken(index)} className="w3-button w3-blue" style={{ backgroundColor: 'blue' }}>
                        Change Payment Token
                      </button>
                    ) : (
                      <button onClick={() => handleRegisterToken(index)} className="w3-button w3-red" style={{ backgroundColor: 'red' }}>
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
    </div>
  );
};

export default RegisteredBeneficiariesPage;
