import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x383bd2e5099f44a324fd7888ecea0e69b8340888"
);

export default instance;
