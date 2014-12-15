define([
  'esri/tasks/FindTask',
  'esri/tasks/FindParameters',
  'esri/graphicsUtils'
], function(
  FindTask, FindParameters, gUtils
) {

  var model = {
    map: undefined,
    setParams: function(params) {
      model.map = params.map;
      model.url = params.url;
      model.searchFields = params.searchFields;
      model.layerIds = params.layerIds;
    },
    init: function() {
      model.task = new FindTask(model.url);
    },
    value: '',
    message: 'Find',
    find: function(e) {
      if (!model.task) {
        model.init();
      }
      var params = new FindParameters();
      params.outSpatialReference = model.map.spatialReference;
      params.returnGeometry = true;
      params.searchText = model.value;
      params.searchFields = model.searchFields;
      params.layerIds = model.layerIds;
      model.task.execute(params).then(function(result) {
        console.debug(result);
        if (result.length) {
          var feature = result[0].feature;
          model.map.setExtent(gUtils.graphicsExtent([feature]));
        } else {
          alert('No results found');
        }
      }, function(err) {
        console.log('Error in search: ', err);
      });
    },
    updateValue: function(e) {
      model.value = e.target.value;
    }
  };

  return model;
});
