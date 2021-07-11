const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compileFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "kite small symptom impact bundle dutch happy live burst mask trade marble",
  "https://rinkeby.infura.io/v3/c55c20def1ce4eceb8dd2c280a5c8e1c"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compileFactory.interface)
  )
    .deploy({ data: compileFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};
deploy();
