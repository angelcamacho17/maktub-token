var MakToken = artifacts.require("./MakToken.sol");

require('chai')
  .use(require('chai-as-promised'))
  .should()

function tokens(n) {
    return web3.utils.toWei(n, 'ether');
  }

contract('MakToken', function(accounts) {
    before(async () => {
        token = await MakToken.new()
      })
    
    describe('Token deployment', async () => {
        it('contract has a name', async () => {
            const name = await token.name()
            assert.equal(name, 'Maktub Token')
        })
        it('sets total amount of supply upon deployement', async () => {
            const total = await token.totalSupply()
            assert.equal(total.toString(), tokens('1000000'))
        })
    })
})