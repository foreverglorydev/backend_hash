// server/index.js

const express = require("express");
const keccak256 = require('keccak256');

const app = express();
const PORT = process.env.PORT || 3001;




let aaa = keccak256('0x5B38Da6a701c568545dCfcB03FcB875f56beddC4').toString('hex');

console.log(aaa);
let bbb = keccak256("\x19Ethereum Signed Message:\n320x" + aaa).toString('hex');
  console.log(bbb);

app.get("/api", (req, res) => {
  let text = req.body.address;
  res.json({ message: "Hello from server!" + text });

  
});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


