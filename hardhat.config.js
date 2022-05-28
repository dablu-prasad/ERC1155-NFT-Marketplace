require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

const { RINKEBY_API_URL, PRIVATE_KEY, ETHERSCAN_KEY } = process.env;

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/04132d4001834221a021b8e2eac7766c",
      accounts: [`d0042ff233d1198b753ff73cc01ee2ddcac2d9acf4541907c40fa25c88e259aa`],
    },
  },
  // etherscan: {
  //   apiKey: ETHERSCAN_KEY,
  // },
};
