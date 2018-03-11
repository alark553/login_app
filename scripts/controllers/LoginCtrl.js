app.controller('LoginCtrl', ['$location', '$timeout', '$scope', '$rootScope', 'UserService', function($location, $timeout, $scope, $rootScope, UserService) {
  var lc = this;
  lc.login = function() {
    UserService.login(lc.userData).then(function(resp) {
      $location.path('/private/');
    })
  }

}]);