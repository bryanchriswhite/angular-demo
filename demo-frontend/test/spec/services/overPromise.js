describe('overPromise', function() {
  beforeEach(function() {
    module('TruecoinDemoAppTest.services');
  });

  var overPromise
    ;

  beforeEach(inject(function(_overPromise_) {
    overPromise = _overPromise_;
  }));


  it('should recursively define #success() and #error() on the promise', function() {
    var deferred = Q.defer()
      , promise = overPromise(deferred.promise)
      ;

    promise.success.should.be.a.Function;
  });
});