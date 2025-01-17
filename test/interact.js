const ParametricInsurance = artifacts.require("ParametricInsurance");

module.exports = async function(callback) {
  try {
    const insurance = await ParametricInsurance.deployed(); // Charger le contrat
    
    // Récupérer l'assureur
    const insurer = await insurance.insurer();
    console.log("Insurer Address:", insurer);

    // Tester la fonction triggerClaim
    await insurance.triggerClaim(150, { from: "0x771149ED2A6a2B5b39743Fcf4F83D302CB2e3ddd" });
    console.log("Claim triggered successfully!");
  } catch (error) {
    console.error("Error:", error);
  }
  callback();
};
