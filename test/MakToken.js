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

        // transfer money
        await token.transfer(token.address, tokens('1000000'))
      })
    
    describe('Token deployment', async () => {
        it('contract has a name', async () => {
            const name = await token.name()
            assert.equal(name, 'Maktub Token')
        })
        it('contract has a symbol', async () => {
            const symbol = await token.symbol()
            assert.equal(symbol, 'MKT')
        })
        it('sets total amount of supply upon deployement', async () => {
            const total = await token.totalSupply()
            assert.equal(total.toString(), tokens('1000000'))
        })
    })

    describe('Token transactions', async () => {
        it('transfering tokens', async () => {
            let balance = await token.balanceOf(token.address)
            assert.equal(balance.toString(), tokens('1000000'))
        })
    })
})