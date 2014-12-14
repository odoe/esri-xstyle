define([], function() {
  var map;
  var value = '';
  return {
    setMap: function(m) {
      map = m;
    },
    value: value,
    message: 'Find',
    toggle: function(e) {
      console.log('click me!', value);
    },
    updateValue: function(e) {
      console.log('update', e.target.value);
      value = e.target.value;
    }
  };
});
