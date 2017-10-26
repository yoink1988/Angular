angular.module('app').component('tovar', {
  bindings: { tovar: '<' },
  
  template: '<div class="flex-h">' + 
            '  <div class="product">' +
            '    <ul>' +
            '      <li ng-repeat="item in $ctrl.tovar">' +
            '        <a ui-sref-active="active" ui-sref="tovar.item({ itemId: item.id })">' +
            '          {{item.name}}' +
            '        </a>' +
            '      </li>' +
            '    </ul>' + 
            '  </div>' +
            '  <ui-view></ui-view>' +
            '</div>'
});