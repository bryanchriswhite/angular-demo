describe('ProductService', function() {
  beforeEach(function() {
    module('TruecoinDemoAppTest.services');
    module(function($provide) {
      $provide.value('overPromise', function() {
        return {
          success: function() {},
          error: function() {},
        }
      })
    })
  });

  var productService
    , overPromise
    ;

  beforeEach(inject(function(_productService_, _overPromise_) {
    productService = _productService_;
    overPromise = _overPromise_;
  }));

  it('should expose #getList()', function() {
    productService.getList.should.be.a.Function
  });

  describe('#getList()', function() {
    it('should return a promise with a #success() and #error()', function() {
      var promise = productService.getList();
      promise.success.should.be.a.Function;
      promise.error.should.be.a.Function;
    });
  });
});