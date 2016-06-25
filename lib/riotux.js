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
        return reducer( state.counter, {type: 'INCREMENT'} )
      },
      DECREMENT: function ( state ) {
        return reducer(state.counter, {type: 'DECREMENT'})
      }
    }
  });

module.exports = function(suite) {
  suite.add('riotux', function() {
      riotux.action('counter', 'INCREMENT')
      riotux.action('counter', 'DECREMENT')
  })
}