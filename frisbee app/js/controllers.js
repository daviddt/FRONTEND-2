'use strict';

/* Controllers */

(function(){

	FrisbeeApp.controller('Main', function ($scope, $location) {

		$scope.isActive = function(route) {

			return route === $location.path();

		};

	});

	FrisbeeApp.controller('ScheduleCtrl', function ($scope, $http) {

		$http.get('json/schedule.json').success(function(data) {

			$scope.schedules = data;

		});

	});

	FrisbeeApp.controller('GameCtrl', function ($scope, $http) {

	    $http.get('json/game.json').success(function(data) {

			$scope.game = data;
			$scope.team1total = $scope.game[$scope.game.length - 1].team1Score;
			$scope.team2total = $scope.game[$scope.game.length - 1].team2Score;

	    });

	});

	FrisbeeApp.controller('RankingCtrl', function ($scope, $http) {

	    $http.get('json/ranking.json').success(function(data) {

	    	$scope.ranking = data;

	    });

	    $scope.orderProp = 'win';

	    $scope.orderBy = function (prop) {
	    	
	    	$scope.orderProp = prop;

	    }

	});

})();
