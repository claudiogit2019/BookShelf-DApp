require('@nomiclabs/hardhat-ethers');
require('dotenv').config();

const { PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 1337
    }
  },
  etherscan: {
    apiKey: ""
  },
  // Si tienes configuraciones adicionales para otras redes, puedes agregarlas aquí
};
