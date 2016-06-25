var
  riotux = new require('riotux')(),
  validate = require('./shared/validate'),
  reducer = require('./shared/reducer'),
  state = require('./shared/initial-state')
;
  riotux.Actions({
    INCREMENT: function ( store ){
      store.dispatch('INCREMENT')
    },
    DECREMENT: function( store ) {
      store.dispatch('DECREMENT')
    }
  });
  
  riotux.Store({
    state: {
      counter: state
    },
    mutations: {
      INCREMENT: function ( state ) {
        state.counter = reducer( state.counter, {type: 'INCREMENT'} )
      },
      DECREMENT: function ( state ) {
        state.counter = reducer(state.counter, {type: 'DECREMENT'})
      }
    }
  });
  
  riotux.subscribe(this, 'counter', ( state, value ) => {
    validate(riotux.getState('counter'))
  });
  
module.exports = function(suite) {
  suite.add('riotux', function() {
      riotux.action('counter', 'INCREMENT')
      riotux.action('counter', 'DECREMENT')
  })
}