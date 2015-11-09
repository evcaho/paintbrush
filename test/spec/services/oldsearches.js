'use strict';

describe('Service: oldsearches', function () {

  // load the service's module
  beforeEach(module('paintbrushApp'));

  // instantiate service
  var oldsearches;
  beforeEach(inject(function (_oldsearches_) {
    oldsearches = _oldsearches_;
  }));

  it('should do something', function () {
    expect(!!oldsearches).toBe(true);
  });

});
