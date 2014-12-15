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
    postCreate: function() {
      model.setParams(lang.mixin({
        map: this.get('map')
      }, this.get('settings')));

    },
    startup: function() {
      require(['xstyle/main'], function(){});
    }
  });

});

