/*global require, location*/
/*jshint laxcomma:true*/
(function() {
  'use strict';

  var pathRX = new RegExp(/\/[^\/]+$/)
    , locationPath = location.pathname.replace(pathRX, '');

  require({
    aliases: [['text', 'dojo/text'], ['domReady', 'dojo/domReady']],
    packages: [{
      name: 'xstyle',
      location: locationPath + 'vendor/xstyle'
    }, {
      name: 'controllers',
      location: locationPath + 'js/controllers'
    }, {
      name: 'widgets',
      location: locationPath + 'js/widgets'
    }, {
      name: 'bootstrap',
      location: locationPath + 'vendor/Dojo-Bootstrap'
    }, {
      name: 'app',
      location: locationPath + 'js',
      main: 'main'
    }]
  }, ['app']);

})();
