var app = angular.module('app', ['ngRoute', 'ngMockE2E']);

app.config(['$qProvider', function($qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
}]);