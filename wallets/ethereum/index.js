const { ethers } = require("ethers");
const ABI = [ "function balanceOf(address) view returns (uint256)", "function transfer(address,uint256)" ];
const provider = new ethers.providers.JsonRpcProvider("YOUR_ETH_RPC");
const wallet = new ethers.Wallet("YOUR_PRIVATE_KEY", provider);
const token = new ethers.Contract("YOUR_TOKEN_ADDRESS", ABI, wallet);

async function send(to, amount) {
  const tx = await token.transfer(to, amount);
  console.log("Sent", amount.toString(), "TX:", tx.hash);
}

async function balance(addr) {
  console.log("Balance:", (await token.balanceOf(addr)).toString());
}

// Örnek
balance(wallet.address);
