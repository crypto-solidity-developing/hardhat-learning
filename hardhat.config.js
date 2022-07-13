/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-waffle');
require('dotenv').config()

module.exports = {
  solidity: "0.8.9",
  networks: {
    testnet: {
      url: process.env.INFURA_URL,
      accounts : [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
