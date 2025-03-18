import { ethers } from "ethers";

export const connectWallet = async (setAccount) => {
  if (typeof window !== "undefined" && window.ethereum) {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccount(accounts[0].toString()); // Ensuring string conversion
      console.log("Wallet Connected:", accounts[0]);
    } catch (error) {
      console.error("Wallet connection failed", error);
    }
  } else {
    alert("Please install MetaMask!");
  }
};

export const checkWalletConnection = async (setAccount) => {
  if (typeof window !== "undefined" && window.ethereum) {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.listAccounts();
      if (accounts.length > 0) {
        setAccount(accounts[0].toString()); // Ensuring string conversion
        console.log("Already Connected:", accounts[0]);
      }
    } catch (error) {
      console.error("Error checking wallet connection", error);
    }
  }
};
