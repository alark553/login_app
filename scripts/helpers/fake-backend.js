app.run(function($httpBackend) {
  $httpBackend.whenPOST('/api/authenticate/').respond(function(method, url, data) {
    var params = angular.fromJson(data);
    var userExists = false;
    var response = {};
    for (var i = 0; i < USERDATA.length; i++) {
      if (USERDATA[i].username == params.username && USERDATA[i].password == params.password) {
        var userdata = USERDATA[i];
        userExists = true;
        response = {
          'data': userdata,
          'success': true,
          'errorMessage': null
        }
        break;
      } else {
        response = {
          'success': false,
          'errorMessage': 'Username/password is incorrect'
        }
      }
    }
    if (userExists) {
      return [200, response, {}];
    } else {
      return [400, response, {}];
    }
  });
  $httpBackend.whenGET(/^\w+.*/).passThrough();
});