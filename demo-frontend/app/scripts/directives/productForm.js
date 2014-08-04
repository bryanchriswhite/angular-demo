angular.module('TruecoinDemoApp.directives')
  .directive('tcProductForm', function($compile, $templateCache) {
    return {
      restrict: 'A',
      scope: {
        formOpen: '=',
        model: '=formModel',
        position: '=formPosition'
      },
      link : function(scope, element, attrs) {
        var template = angular.element($templateCache.get('product-form'));

        element.after(template);
        $compile(template)(scope);
        
        scope.$watch('formOpen', function(newVal, oldVal) {
          if (newVal === true) {
            template[0].style.display = 'block';
            template.toggleClass('in', true);
            template.toggleClass('out', false);
          } else {
            template.toggleClass('in', false);
            template.toggleClass('out', true);
            template[0].style.display = 'none';
          }
        });
        
        scope.$watch('position', function(newVal) {
          template[0].style.top = newVal.top + 'px';
          template[0].style.left = newVal.left + 'px';
        });
        
        scope.closeForm = function() {
          scope.formOpen = false;
        };
        
        scope.submit = function() {
          console.log('submitted');
        };
      }
    }
  });