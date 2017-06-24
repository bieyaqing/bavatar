angular.module('BAVATAR', ['ngRoute', 'angular-loading-bar', 'ctrl.splash', 'app.filters', 'app.languages'])

.run(function($rootScope, $window) {
	var yqConsole = function(){
		console.log("%c__     __  _____\n" +
				"%c\\ \\   / / / ___ \\\n" +
				"%c \\ \\_/ / / /__/ /\n" +
				"%c  \\_  /  \\___  /\n" +
				"%c   / /      / /\n" +
				"%c  /_/      /__\\\n\n",
				'color:#A1C7E3','color:#A1C7E3','color:#91BEDE','color:#91BEDE','color:#81B5D9','color:#81B5D9');
		console.log('%cWe are looking for talents\n'+
				'Refer to the About page for detailed job description:)\n\n' +
				'Email: bieyaqing@live.cn\n'+
				'Phone: +65 9069 6851', 'color:#009999')
	};
	yqConsole();
})

.config(function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix("");

	$routeProvider
	.when('/splash', {
		templateUrl: 'templates/splash.html',
		controller: 'splashCtrl'
	})
	.otherwise({
		redirectTo: '/splash'
	});
});