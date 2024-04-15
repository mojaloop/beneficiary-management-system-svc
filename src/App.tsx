// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NewBeneficiariesPage from './NewBeneficiariesPage';
import RegisteredBeneficiariesPage from './RegisteredBeneficiariesPage';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/"  Component={NewBeneficiariesPage} />
      <Route path="/registered-beneficiaries"  Component={RegisteredBeneficiariesPage} />
    
      </Routes>
    </Router>
  );
};

export default App;

/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/