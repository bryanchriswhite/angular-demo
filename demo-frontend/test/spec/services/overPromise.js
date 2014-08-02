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

    // TODO: refactor to be programatic... yikes!
    //-- base
    promise.success.should.be.a.Function;
    promise.error.should.be.a.Function;

    //-- first recursion
    promise
      .success(angular.noop)
      .success
      .should.be.a.Function;
    
    promise
      .success(angular.noop)
      .error
      .should.be.a.Function;
    
    promise
      .error(angular.noop)
      .success
      .should.be.a.Function;

    promise
      .error(angular.noop)
      .error
      .should.be.a.Function;

    //-- second recursion
    promise
      .success(angular.noop)
      .success(angular.noop)
      .success
      .should.be.a.Function;

    promise
      .success(angular.noop)
      .success(angular.noop)
      .error
      .should.be.a.Function;
    
    promise
      .success(angular.noop)
      .error(angular.noop)
      .success
      .should.be.a.Function;
    
    promise
      .success(angular.noop)
      .error(angular.noop)
      .error
      .should.be.a.Function;

    promise.error(angular.noop)
      .success(angular.noop)
      .success
      .should.be.a.Function;

    promise.error(angular.noop)
      .success(angular.noop)
      .error
      .should.be.a.Function;

    promise.error(angular.noop)
      .error(angular.noop)
      .success
      .should.be.a.Function;

    promise.error(angular.noop)
      .error(angular.noop)
      .error
      .should.be.a.Function;
  });
});