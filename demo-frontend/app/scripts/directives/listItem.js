angular.module('TruecoinDemoApp.directives')
  .directive('tcListItem', function($compile) {
    return {
      scope: {
        product: '=',
      },
      link : function(scope, element, attrs) {
        var actions = angular.element('<div class="fade out input-group">\
        <span class="input-group-addon "><span class="glyphicon glyphicon-ok"></span></span>\
        <input class="form-control" type="text"/>\
        </div>\
        <div class="list-item-buttons fade out btn-group">\
          <button ng-click="openForm()" class="btn btn-warning"><span class="glyphicon glyphicon-pencil"></span></button>\
          <button class="btn btn-danger"><span class="glyphicon glyphicon-remove"></span></button>\
        </div>');

        element.append(actions);
        $compile(actions)(scope);

        var buttons = element.find('.list-item-buttons')
          , form = element.find('.input-group')
          , hide = function(_element) {
            _element.toggleClass('out', true);
            _element.toggleClass('in', false);
          }
          , show = function(_element) {
            _element.toggleClass('out', false);
            _element.toggleClass('in', true);
          }
          , setStyle = function(_element, property, value) {
            _element[0].style[property] = value;
          }
          ;

        element.on('mouseenter', function() {
          //-- don't show the buttons if a form is open
          if (scope.formOpen) return;
          
          show(buttons);
          var top = element.position().top + (element.height() / 2) + 'px'; //event.clientY + 'px';
          var left = event.clientX + 10 + 'px';
          setStyle(buttons, 'top', top);
          setStyle(buttons, 'left', left);
          setStyle(form, 'top', top);
          setStyle(form, 'left', left);
//          buttons[0].style.transition = 'top 100ms ease, left 100ms ease';
        });


        element.on('mouseleave', function() {
          hide(buttons);
        });

        scope.openForm = function() {
          scope.formOpen = true;
          hide(buttons);
          show(form);
        }
      }
    }
  });