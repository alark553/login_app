app.config(['$locationProvider', '$httpProvider', function($locationProvider, $httpProvider) {
  $locationProvider.hashPrefix('');
  $httpProvider.defaults.withCredentials = false;
}]);

app.config(['$routeProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/welcome.html',
      resolve: {
        userInfo: ['$location', 'UserService', function($location, UserService) {
          if (UserService.isLoggedIn) {
            $location.path('/profile/');
          } else {
            $location.path('/');
          }
        }]
      }
    })
    .when('/login/', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'lc',
      resolve: {
        userInfo: ['$location', 'UserService', function($location, UserService) {
          if (UserService.isLoggedIn) {
            $location.path('/profile/');
          } else {
            $location.path('/login/');
          }
        }]
      }
    })
    .when('/profile/', {
      templateUrl: 'views/profile.html',
      resolve: {
        userInfo: ['$location', 'UserService', function($location, UserService) {
          if (UserService.isLoggedIn) {
            $location.path('/profile/');
          } else {
            $location.path('/');
          }
        }]
      }
    })
  $routeProvider.otherwise({
    redirectTo: '/'
  });
}]);

app.run(['$rootScope', '$location', '$templateCache', 'UserService',
  function($rootScope, $location, $templateCache, UserService) {
    $rootScope.$on('$locationChangeStart', function() {
      if (UserService.session()) {
        UserService.isLoggedIn = true;
      } else {
        UserService.isLoggedIn = false;
      }
    });
    $rootScope.$on('$viewContentLoaded', function() {
      $templateCache.removeAll();
    });
  }
]);