angular.module('app').component('item', {
  bindings: { item: '<' },
  template: '<a ui-sref="tovar" ui-sref-active="active">Product</a>'+
            '<div>Name: {{$ctrl.item.name}}</div>' +
            '<div>Id: {{$ctrl.item.id}}</div>'           
});