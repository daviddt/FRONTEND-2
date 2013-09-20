'use strict';

var FrisbeeApp = angular.module('frisbee', []);

(function(){

	FrisbeeApp.config(['$routeProvider', function ($routeProvider) {
	  $routeProvider.
	      when('/schedule', {templateUrl: 'partials/schedule.html',   controller: 'ScheduleCtrl'}).
	      when('/game', {templateUrl: 'partials/game.html',   controller: 'GameCtrl'}).
	      when('/ranking', {templateUrl: 'partials/ranking.html',   controller: 'RankingCtrl'}).
	      otherwise({redirectTo: '/schedule'});
	});

}])();