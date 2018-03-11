app.factory('UserService', ['$http', '$q', '$rootScope', '$location', 'USERDATA', function($http, $q, $rootScope, $location, USERDATA) {
  var service = {
    isLoggedIn: false,
    session: function() {
      if (localStorage.getItem('userdata')) {
        service.isLoggedIn = true;
      }
      return service.isLoggedIn;
    },
    'login': function(data) {
      var deferred = $q.defer();
      angular.element('.loader-blocker p').text('Logging in');
      angular.element('.loader-blocker').show();
      for (var i = 0; i < USERDATA.length; i++) {
        if (USERDATA[i].username == data.username && data.password == USERDATA[i].password) {
          var userdata = USERDATA[i];
          break;
        }
      }
      if (!service.isEmptyObject(userdata)) {
        setTimeout(function() {
          var response = {
            'data': userdata,
            'success': true,
            'errorMessage': null
          }
          service.setCredentials(response.data);
          $rootScope.$emit('userLoggedInStateChanged');
          angular.element('.loader-blocker').hide();
          deferred.resolve(response);
        }, 2000);
      } else {
        setTimeout(function() {
          var response = {
            'success': false,
            'errorMessage': 'Username/password is incorrect'
          }
          deferred.reject(response);
          service.notify(response.errorMessage);
          angular.element('.loader-blocker').hide();
        }, 2000);
      }
      return deferred.promise;
    },
    'setCredentials': function(data) {
      service.isLoggedIn = true;
      localStorage.setItem('userdata', JSON.stringify(data));
      $location.path('/profile/');
    },
    'clearCredentials': function() {
      localStorage.removeItem('userdata');
      service.isLoggedIn = false;
    },
    'logout': function() {
      angular.element('.loader-blocker p').text('Logging out');
      angular.element('.loader-blocker').show();
      service.isLoggedIn = false;
      service.clearCredentials();
      setTimeout(function() {
        angular.element('.loader-blocker').hide();
      }, 1000);
      $location.path('/login/');
    },
    'notify': function(msg) {
      document.getElementById('notif-msg').innerHTML = msg;
      document.getElementById('notif-msg').style.top = '80%';
      setTimeout(function() {
        document.getElementById('notif-msg').style.top = '100%';
      }, 3000);
    },
    'isEmptyObject': function(obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
          return false;
      }
      return true;
    },
  };
  return service;
}]);