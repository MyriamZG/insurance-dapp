import Web3 from 'web3';

let web3;

// Vérification de MetaMask ou Ganache
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    window.ethereum.request({ method: 'eth_requestAccounts' });
  } catch (error) {
    console.error("Permission refusée pour accéder à MetaMask.", error);
  }
} else if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
} else {
  console.error("Pas de Web3 détecté. Veuillez installer MetaMask.");
  web3 = new Web3("http://127.0.0.1:8545"); // Connexion Ganache
}

export default web3;
