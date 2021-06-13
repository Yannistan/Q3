const SimpleNFT = artifacts.require('SimpleNFT');

// Attention si bug PoolError il faut modifier:
// node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js line 34 et set
// le timeout à minimum 100000 (par défaut c'est 20000)
module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(SimpleNFT, accounts[0], { from: accounts[0] });
};