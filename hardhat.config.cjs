require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28",
  networks: {
    educhain: {
      url: process.env.EDUCHAIN_RPC_URL, // Educhain node URL
      chainId: 656476,
      accounts: [process.env.PRIVATE_KEY], // Private key for transactions
    },
  },
};
