var expect = require('chai').expect,
  state = require('./initial-state')

module.exports = function test(newState) {
  expect(newState).to.be.equal(state === 0 ? 1 : 0)
  expect(newState).to.be.a('number')
  state = newState
}
