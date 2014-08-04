angular.module('TruecoinDemoApp.directives')
  .directive('tcListItem', function($compile, $templateCache, productService) {
    return {
      scope: {
        originalProduct: '=product'
      },
      link : function(scope, element, attrs) {
        var actions = angular.element($templateCache.get('product-form') + $templateCache.get('list-item'));
        
        element.append(actions);
        $compile(actions)(scope);

        var buttons = element.find('.list-item-buttons')
          , form = element.find('.product-form')
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
          //-- render buttons vertically in the middle of the `<tr>` 
          //  and horizontally 10px to the right of the cursor
          var top = element.position().top + (element.height() / 2) + 'px';
          var left = event.clientX + 10 + 'px';
          setStyle(buttons, 'top', top);
          setStyle(buttons, 'left', left);
          setStyle(form, 'top', top);
          setStyle(form, 'left', left);
        });


        element.on('mouseleave', function() {
          hide(buttons);
        });

        scope.openForm = function() {
          scope.formOpen = true;
          hide(buttons);
          show(form);

          //-- Use a copy of the product to avoid updating the `<tr>`'s model.
          //  Also, this means that when form is opened again any unsaved changes
          //  will be destroyed, :thumbsup:
          scope.product = productService.copy(scope.originalProduct);
        };

        scope.closeForm = function() {
          scope.formOpen = false;
          show(buttons);
          hide(form);
        };

        scope.submit = function() {
          scope.product.save()
            .success(function() {
              //-- on successful save, replace the product with the copy
              scope.originalProduct = scope.product;
              scope.closeForm();
              hide(buttons);
            })
            .error(function() {
              //-- on error, don't modify the `scope.product`
              // TODO: add error view messaging
              console.error('Couldn\'t update product: ', reason);
            })
        };
      }
    }
  });