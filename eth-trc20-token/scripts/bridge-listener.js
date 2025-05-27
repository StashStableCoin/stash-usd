const { ethers } = require("ethers");
const fetch = require("node-fetch");

const ETH_RPC = "https://mainnet.infura.io/v3/YOUR_INFURA_KEY";
const MONERO_RPC = "http://localhost:18081/json_rpc";

async function listen() {
  const provider = new ethers.providers.JsonRpcProvider(ETH_RPC);
  const abi = ["event Transfer(address indexed from,address indexed to,uint256 value)"];
  const token = new ethers.Contract("YOUR_TOKEN_ADDRESS", abi, provider);

  token.on("Transfer", async (from, to, value) => {
    // Örnek: Monero RPC üzerinden mint isteği
    await fetch(MONERO_RPC, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "0",
        method: "mint_stusd",
        params: {address: to, amount: value.toString()}
      })
    });
    console.log(`Mint requested for ${value.toString()} to ${to}`);
  });
}

listen();
