import React, { useState, useEffect } from 'react';
import insurance from './insurance';
import web3 from './web3';

function App() {
  const [account, setAccount] = useState('');
  const [totalContracts, setTotalContracts] = useState(0);
  const [contracts, setContracts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadBlockchainData = async () => {
      try {
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        const total = await insurance.methods.getTotalContracts().call();
        setTotalContracts(total);
      } catch (error) {
        setError("Failed to load blockchain data.");
        console.error(error);
      }
    };
    loadBlockchainData();
  }, []);

  const loadContracts = async () => {
    try {
      let contractsArray = [];
      for (let i = 0; i < totalContracts; i++) {
        const contract = await insurance.methods.getContractDetails(i).call();
        contractsArray.push(contract);
      }
      setContracts(contractsArray);
    } catch (error) {
      setError("Failed to load contract details.");
      console.error(error);
    }
  };

  return (
    <div>
      <header>
        <h1>Insurance DApp</h1>
        <p>Connected Account: {account}</p>
        <p>Total Contracts: {totalContracts}</p>
      </header>
      <main>
        <button onClick={loadContracts}>Load Contracts</button>
        {contracts.map((c, index) => (
          <div key={index}>
            <p>Insured: {c.insured}</p>
            <p>Premium: {c.premium}</p>
            <p>Payout: {c.payout}</p>
            <p>Policy Details: {c.policyDetails}</p>
          </div>
        ))}
        {error && <p>{error}</p>}
      </main>
    </div>
  );
}

export default App;
