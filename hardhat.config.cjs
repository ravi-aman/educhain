import { config } from "dotenv";
// import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

config(); 

export default {
  solidity: "0.8.20",
  networks: {
    educhain: {
      url: process.env.EDUCHAIN_RPC_URL, // Educhain node URL
      accounts: [process.env.PRIVATE_KEY], // Private key for transactions
    },
  },
};
