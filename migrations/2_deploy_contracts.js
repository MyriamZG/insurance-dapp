const ParametricInsurance = artifacts.require("ParametricInsurance");

module.exports = function(deployer) {
  // Utilisation de la première adresse générée par Ganache CLI
  const insuredAddress = "0x771149ED2A6a2B5b39743Fcf4F83D302CB2e3ddd"; // Remplacez par l'adresse de votre choix
  const triggerThreshold = 100; // Seuil déclencheur
  const payoutAmount = web3.utils.toWei("1", "ether"); // Montant à verser en ETH

  deployer.deploy(ParametricInsurance, insuredAddress, triggerThreshold, payoutAmount);
};
