module.exports = {
  networks: {
    // Configuration du réseau local pour Ganache CLI
    development: {
      host: "127.0.0.1",    // Adresse locale pour Ganache
      port: 8545,           // Port utilisé par Ganache CLI
      network_id: "*",      // Accepter tous les IDs de réseau
    },
  },

  // Configuration des tests
  mocha: {
    // timeout: 100000
  },

  // Configuration du compilateur Solidity
  compilers: {
    solc: {
      version: "0.8.21",    // Version de Solidity utilisée
      settings: {
        optimizer: {
          enabled: true,    // Activer l'optimisation pour économiser du gaz
          runs: 200,        // Nombre d'exécutions optimisées
        },
        evmVersion: "istanbul", // Version de l'EVM (compatible avec Solidity 0.5.x)
      },
    },
  },

  // Désactivation de Truffle DB pour éviter des complications inutiles
  db: {
    enabled: false,
  },
};
