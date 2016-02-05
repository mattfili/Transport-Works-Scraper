(function () {
	'use strict';

	var _templateBase = "./scripts";

	angular.module('app', [
		'ngRoute',
		'ngMaterial',
		'ngAnimate'
	])

	.config(function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: _templateBase + '/main.html',
			controller: 'main',
			controllerAs: 'main'
		});
			$routeProvider.otherwise({redirectTo: '/'});
		}
	);
})();