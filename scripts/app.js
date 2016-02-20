var name, time;

angular.module('News', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '#/home.html',
      controller: 'MainCtrl'
    })
    .state('game', {
      url: '/game',
      templateUrl: '#/game.html',
      controller: 'GameCtrl'
    })
    .state('done', {
      url: '/done',
      templateUrl: '#/done.html',
      controller: 'DoneCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]) 

.controller('MainCtrl', [
'$scope',
function($scope){
	$scope.saveName = function(input) {
		name = input;
	}
}])

.controller('GameCtrl', [
'$scope',
function($scope){
	$scope.saveScore = function(){

	}
}]);

.controller('DoneCtrl', [
'$scope',
function($scope){
  $scope.person = name;


}]);
