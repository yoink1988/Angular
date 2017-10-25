angular.module('app',[]).controller('MainController', MainController);
var app = angular.module('app');

app.factory('listServ', function(){
	return {
		list: [],
		getArr: function(){
			return this.list;
		},
		addItem: function(item){
			this.list.push(item)
		}
	};
})

function MainController($scope,listServ){

	$scope.listArr = listServ.getArr();
    $scope.add = '';
	this.add = function(val){
        if(val.length){
			listServ.addItem(val);		
        }
	}
}
app.directive('myInput', function() {
    return {
        templateUrl: 'tmp.html',
      };
    });
    app.directive('myList', function() {
      return {
          scope:{
              arr:'=arr',
              filterVal:'=filter'
          },
          controller: function($scope){
            for(var obj in $scope.arr){
                $scope.arr[obj] = $scope.arr[obj];
            }
        },
        template: '<ul><li  ng-repeat="value in arr | filter:filterVal | orderBy  track by $index">{{[value]}}</li></ul>'
      };
    });
