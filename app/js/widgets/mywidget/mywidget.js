/*global define*/
/*jshint laxcomma:true*/
define([
  'require',
  'dojo/_base/declare',
  'dojo/_base/lang',
  // Dijit stuff
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  // dom stuff
  'dojo/dom-class',
  './model',
  'text!./templates/mywidget.tpl.html',
  'xstyle/css!./css/mywidget.css'
], function(
  require,
  declare, lang,
  _WidgetBase, _TemplatedMixin,
  domClass, model,
  template
) {
  'use strict';

  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    constructor: function() {
      console.log('mywidget');
    },
    postCreate: function() {
      console.log('footer?', this.domNode);
      model.setMap(this.get('map'));
    },
    startup: function() {
      require(['xstyle/main'], function(){});
    }
  });

});

