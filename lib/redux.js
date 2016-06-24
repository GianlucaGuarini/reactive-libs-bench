var createStore = require('redux').createStore,
  reducer = require('./shared/reducer'),
  validate = require('./shared/validate'),
  store = createStore(reducer)

store.subscribe(function() {
  validate(store.getState())
})

module.exports = function(suite) {
  suite.add('redux', function() {
    store.dispatch({ type: 'INCREMENT' })
    store.dispatch({ type: 'DECREMENT' })
  })
}
