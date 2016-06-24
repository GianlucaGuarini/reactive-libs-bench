var createStore = require('redux').createStore,
  reducer = require('./shared/reducer'),
  store = createStore(reducer),
  expect = require('chai').expect,
  state = store.getState()

store.subscribe(function() {
  var val = store.getState()
  expect(val).to.be.equal(state === 0 ? 1 : 0)
  expect(val).to.be.a('number')
  state = val
})

module.exports = function(suite) {
  suite.add('redux', function() {
    store.dispatch({ type: 'INCREMENT' })
    store.dispatch({ type: 'DECREMENT' })
  })
}
