var
  icaro = require('icaro'),
  store = icaro({
    type: null,
    state: require('./shared/initial-state')
  }),
  validate = require('./shared/validate'),
  reducer = require('./shared/reducer')

store.listen(function(changes) {
  const type = changes.get('type')
  if (type) {
    store.state = reducer(store.state, { type })
    validate(store.state)
  }
})

module.exports = function(suite) {
  suite.add('icaro (ES6 proxy + debounced)', function() {
    store.type = store.state === 0 ? 'INCREMENT' : 'DECREMENT'
  })
}
