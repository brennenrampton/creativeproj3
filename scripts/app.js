angular.module('News', ['ui.router']).config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      }).state('game', {
        url: '/game',
        templateUrl: '/game.html',
        controller: 'PostCtrl'
      }).state('score', {
        url: '/score',
        templateUrl: '/score.html',
        controller: 'PostCtrl'
      });
    $urlRouterProvider.otherwise('home');
}]);
