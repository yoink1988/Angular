var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider) {
  // An array of state definitions
  var states = [
    { 
      name: 'tovar', 
      url: '/', 
      component: 'tovar',
      resolve: {
        tovar: function(TovarService) {
          return TovarService.getAllTovar();
        }
      }
    },
    
    { 
      name: 'tovar.item', 
      url: '/{itemId}', 
      component: 'item',
      resolve: {
        item: function(tovar, $stateParams) {
          return tovar.find(function(item) { 
            return item.id === $stateParams.itemId;
          });
        }
      }
    }
  ]
  
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});

