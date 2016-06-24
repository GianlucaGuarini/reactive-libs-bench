var Bacon = require('baconjs'),
  reducer = require('./shared/reducer'),
  store = new Bacon.Bus(),
  expect = require('chai').expect,
  state = 0

store.map(function(type) {
  return reducer(state, type)
}).onValue(function(val) {
  expect(val).to.be.equal(state === 0 ? 1 : 0)
  expect(val).to.be.a('number')
  state = val
})

module.exports = function(suite) {
  suite.add('baconjs', function() {
    store.push({ type: 'INCREMENT' })
    store.push({ type: 'DECREMENT' })
  })
}
