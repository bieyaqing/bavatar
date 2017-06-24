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
angular.module('ctrl.splash', [])

.controller('splashCtrl', function($scope) {
	
});
angular.module('app.filters', [])

.filter('text_fmt', function() {
	return function(input, opt1, opt2) {
		if(input) {
			switch(opt1) {
				case 0:
					return input.toLowerCase();
				break;
				case 1:
					return input.replace(/\w\S*/g, function(txt){
						return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
					});
				break;
				case 2:
					
				break;
				case 3:
					return input.toUpperCase();
				break;
			}
		}
	}
})

.filter('text_ellipsis', function() {
	return function(input, opt1, opt2) {
		if(input.length > opt1) {
			return input.substring(0, opt1) + "...";
		} else {
			return input;
		}
	}
})

.filter('bg_style', function() {
	return function(url) {
		if(url) {
			return {
				"background-image": "url("+url+")"
			}
		} else {
			return null;
		}
	}
});

angular.module('app.languages', [])

.factory('langService', function(){
	var EN = {
		
	};
	var CH = {
		
	};
	return{
		set: function(opt) {
			if(opt == 'EN') {
				localStorage.setItem("BAVATAR_LANGUAGE", "EN");
				return EN;
			} else if(opt == 'CH') {
				localStorage.setItem("BAVATAR_LANGUAGE", "CH");
				return CH;
			} else {
				localStorage.setItem("BAVATAR_LANGUAGE", "EN");
				return EN;
			}
		},
		get: function() {
			var foo = localStorage.getItem("BAVATAR_LANGUAGE");
			if(foo == "EN") {
				return EN;
			} else if(foo == "CH") {
				return CH;
			} else {
				localStorage.setItem("BAVATAR_LANGUAGE", "EN");
				return EN;
			}
		},
		opt: function() {
			var foo = localStorage.getItem("BAVATAR_LANGUAGE");
			if(foo) {
				return foo;
			} else {
				localStorage.setItem("BAVATAR_LANGUAGE", "EN");
				return "EN";
			}
		}
	}
});