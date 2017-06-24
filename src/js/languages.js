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