const TronWeb = require("tronweb");
const tronWeb = new TronWeb({
  fullHost: "https://api.trongrid.io",
  privateKey: "YOUR_PRIVATE_KEY"
});
const contractAddress = "YOUR_TRC20_ADDRESS";

async function send(to, amount) {
  const contract = await tronWeb.contract().at(contractAddress);
  const tx = await contract.transfer(to, amount).send();
  console.log("Sent:", tx);
}

async function balance(addr) {
  const contract = await tronWeb.contract().at(contractAddress);
  const bal = await contract.balanceOf(addr).call();
  console.log("Balance:", bal.toString());
}

// Örnek
balance(tronWeb.defaultAddress.base58);
