const Token = artifacts.require('Token.sol');

module.exports = function (deployer, network) {
    if(network === 'mumbai'){
        deployer.deploy(Token);
    }
}