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
