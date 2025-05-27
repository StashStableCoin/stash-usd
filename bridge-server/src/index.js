const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const app = express();
app.use(bodyParser.json());

app.post("/swap", async (req, res) => {
  const {chain, txid, address, amount} = req.body;
  // Örnek: cryptonote-core RPC’a mint veya burn RPC’si
  await fetch("http://cryptonote-daemon:18081/json_rpc", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: "0",
      method: chain==="in" ? "mint_stusd" : "burn_stusd",
      params: {address, amount}
    })
  });
  res.json({status:"ok"});
});

app.listen(3000, () => console.log("Bridge server listening on :3000"));
