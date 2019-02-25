// Allows us to use ES6 in our migrations and tests.
// require('babel-register')

var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "eb8d96a1c4344f2aa9f3905afa763079";
var mnemonic = "elevator tilt brisk elevator cram law canal curious energy notable oxygen limb";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
      network_id: 3
    }
  }
};

// https://ropsten.infura.io/v3/eb8d96a1c4344f2aa9f3905afa763079
