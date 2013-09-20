'use strict';

var myApp = angular.module('myApp', []);
// Declare app level module which depends on filters, and services

(function(){

	myApp.config(['$routeProvider', function($routeProvider) {
	    $routeProvider.when('/schedule', {templateUrl: 'templates/schedule.html', controller: 'Schedule'});
	    $routeProvider.when('/game', {templateUrl: 'templates/game.html', controller: 'Game'});
	    $routeProvider.when('/ranking', {templateUrl: 'templates/ranking.html', controller: 'Ranking'});
	    $routeProvider.otherwise({redirectTo: '/schedule'});
	  }]);

})();



