app.controller('MainCtrl', ['$location', '$timeout', '$scope', '$rootScope', 'UserService', function($location, $timeout, $scope, $rootScope, UserService) {
  var mc = this;
  mc.logout = function() {
    UserService.logout();
  }

  $rootScope.$on('userLoggedInStateChanged', function() {
    mc.userdata = JSON.parse(localStorage.getItem('userdata'));
  });

  if (JSON.parse(localStorage.getItem('userdata'))) {
    mc.userdata = JSON.parse(localStorage.getItem('userdata'));
  }
}]);