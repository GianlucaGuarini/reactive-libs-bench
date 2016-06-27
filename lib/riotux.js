var
  Riotux = require('riotux'),
  store = new Riotux(),
  validate = require('./shared/validate'),
  reducer = require('./shared/reducer'),
  state = require('./shared/initial-state')

store.Actions({
  INCREMENT: function (store) {
    store.dispatch('INCREMENT')
  },
  DECREMENT: function(store) {
    store.dispatch('DECREMENT')
  }
})

store.Store({
  state: {
    counter: state
  },
  mutations: {
    INCREMENT: function (state) {
      state.counter = reducer( state.counter, {type: 'INCREMENT'} )
    },
    DECREMENT: function (state) {
      state.counter = reducer(state.counter, {type: 'DECREMENT'})
    }
  }
})

store.subscribe(this, 'counter', (state, value) => {
  validate(store.get('counter'))
})

module.exports = function(suite) {
  suite.add('riotux', function() {
    store.action('counter', 'INCREMENT')
    store.action('counter', 'DECREMENT')
  })
}
