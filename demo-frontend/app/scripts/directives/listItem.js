angular.module('TruecoinDemoApp.directives')
  .directive('tcListItem', function($compile) {
    return {
      scope: true,
      link : function(scope, element, attrs) {
        var actions = angular.element('<div class="list-item-form fade out"><div class="input-group">\
        <span class="input-group-addon" ng-click="closeForm()"><span class="glyphicon glyphicon-remove"></span></span>\
        <input class="form-control" type="text" ng-model="productCopy.name"/>\
        <input class="form-control" type="text" ng-model="productCopy.description"/>\
        <input class="form-control" type="text" ng-model="productCopy.inventory_count" pattern="\\d+"/>\
        <span class="input-group-addon" ng-click="submit()"><span class="glyphicon glyphicon-ok"></span></span>\
        </div>\
        </div>\
        <div class="list-item-buttons fade out btn-group">\
          <button ng-click="openForm()" class="btn btn-warning"><span class="glyphicon glyphicon-pencil"></span></button>\
          <button class="btn btn-danger"><span class="glyphicon glyphicon-remove"></span></button>\
        </div>');

        element.append(actions);
        $compile(actions)(scope);

        var buttons = element.find('.list-item-buttons')
          , form = element.find('.list-item-form')
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
          , copyProductData = function() {
            scope.productCopy = {
              name           : scope.product.name,
              description    : scope.product.description,
              inventory_count: scope.product.inventory_count
            }
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
        };

        scope.closeForm = function() {
          scope.formOpen = false;
          show(buttons);
          hide(form);
        };
        
        scope.submit = function() {
          scope.product.save()
        };

        copyProductData();
      }
    }
  });