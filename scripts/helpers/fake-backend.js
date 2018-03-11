app.run(function($httpBackend) {
  $httpBackend.whenPOST('/api/authenticate/').respond(function(method, url, data) {
    var params = angular.fromJson(data);
    for (var i = 0; i < USERDATA.length; i++) {
      if (USERDATA[i].username == params.username && USERDATA[i].password == params.password) {
        var userdata = USERDATA[i];
        var response = {
          'data': userdata,
          'success': true,
          'errorMessage': null
        }
        return [200, response, {}];
        break;
      } else {
        var response = {
          'success': false,
          'errorMessage': 'Username/password is incorrect'
        }
        return [400, response, {}];
      }
    }
  });
  $httpBackend.whenGET(/^\w+.*/).passThrough();
});