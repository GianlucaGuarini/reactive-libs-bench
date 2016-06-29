var
  rtx =  require('rtx')(),
  validate = require('./shared/validate'),
  reducer = require('./shared/reducer'),
  state = require('./shared/initial-state')
;
var store = rtx.createStore({
    name: 'Store',
    state: {
      counter: state
    },
    actions: {
      INCREMENT: function (state) {
        state.counter = reducer( state.counter, {type: 'INCREMENT'} )
      },
      DECREMENT: function (state) {
        state.counter = reducer(state.counter, {type: 'DECREMENT'})
      }
    }
  });

store.observe( function( ) {
   validate(store.get('counter'))
});

module.exports = function(suite) {
  suite.add('rtx', function() {
    store.dispatch('counter', 'INCREMENT')
    store.dispatch('counter', 'DECREMENT')
  })
}