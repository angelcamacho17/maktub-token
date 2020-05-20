var MakToken = artifacts.require("./MakToken");

module.exports = function(deployer) {
    deployer.deploy(MakToken);
}