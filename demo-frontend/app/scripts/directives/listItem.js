angular.module('TruecoinDemoApp.directives')
  .directive('tcListItem', function() {
    return {
      scope: {
        product: '=',
      },
      link : function(scope, element, attrs) {
        element.append('<div class="list-item-buttons fade out btn-group">\
          <button class="btn btn-warning"><span class="glyphicon glyphicon-pencil"></span></button>\
          <button class="btn btn-danger"><span class="glyphicon glyphicon-remove"></span></button>\
        </div>');

        var buttons = element.find('.list-item-buttons')

        element.on('mouseenter', function() {
          buttons.toggleClass('out', false);
          buttons.toggleClass('in', true);
          buttons[0].style.top = element.position().top + (element.height() / 2) + 'px'; //event.clientY + 'px';
          buttons[0].style.left = event.clientX + 10 + 'px';
//          buttons[0].style.transition = 'top 100ms ease, left 100ms ease';
        });

        element.on('mouseleave', function() {
          buttons.toggleClass('out', true);
          buttons.toggleClass('in', false);
        });
      }
    }
  });