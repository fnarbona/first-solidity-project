// migrations/2_deploy.js
const BEP20Token = artifacts.require('BEP20Token');

module.exports = async function (deployer) {
  await deployer.deploy(BEP20Token);
};