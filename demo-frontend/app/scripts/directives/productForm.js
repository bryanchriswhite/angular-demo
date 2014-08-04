angular.module('TruecoinDemoApp.directives')
  .directive('tcProductForm', function($compile, $templateCache, $timeout) {
    return {
      restrict: 'A',
      scope   : {
        formOpen: '=',
        model   : '=formModel',
        position: '=formPosition'
      },
      link    : function(scope, element, attrs) {
        var template = angular.element($templateCache.get('product-form'));

        element.after(template);
        $compile(template)(scope);

        scope.$watch('formOpen', function(newVal, oldVal) {
          if (newVal === true) {
            template[0].style.display = 'block';
            $timeout(function() {
              template.toggleClass('in', true);
              template.toggleClass('out', false);
            }, 100);
          } else {
            template.toggleClass('in', false);
            template.toggleClass('out', true);
            $timeout(function() {
              template[0].style.display = 'none';
            }, 500);
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