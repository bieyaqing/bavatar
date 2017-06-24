var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var removeHtmlComments = require('gulp-remove-html-comments');
var webserver = require('gulp-webserver');
var clean = require('gulp-clean');
var args = require('get-gulp-args')();
var gulpif = require('gulp-if');
var replace = require('gulp-replace');
var ngmin = require('gulp-ngmin');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');

/** ======
Parameters
======= */
var SRC = "src", DEST = "dev"

gulp.task('default', function() {
	console.log(`
	===============
	bavatar project
	===============
	`);
});

gulp.task('build-media', function() {
	return gulp.src([
		SRC + "/media/*.png",
		SRC + "/media/*.jpg",
	])
	.pipe(imagemin())
	.pipe(gulp.dest(DEST + '/media'));
});

var LIBRARIES = [
	'./node_modules/moment/min/moment.min.js',
	'./node_modules/font-awesome/css/font-awesome.min.css',
	'./node_modules/font-awesome/fonts/*.eot',
	'./node_modules/font-awesome/fonts/*.svg',
	'./node_modules/font-awesome/fonts/*.ttf',
	'./node_modules/font-awesome/fonts/*.woff',
	'./node_modules/font-awesome/fonts/*.woff2',
	'./node_modules/font-awesome/fonts/*.otf',
	'./node_modules/roboto-fontface/css/roboto/roboto-fontface.css',
	'./node_modules/roboto-fontface/fonts/Roboto/*.eot',
	'./node_modules/roboto-fontface/fonts/Roboto/*.svg',
	'./node_modules/roboto-fontface/fonts/Roboto/*.ttf',
	'./node_modules/roboto-fontface/fonts/Roboto/*.woff',
	'./node_modules/roboto-fontface/fonts/Roboto/*.woff2',
	'./node_modules/roboto-fontface/fonts/Roboto/*.otf',
	'./node_modules/tether/dist/css/tether.min.css',
	'./node_modules/tether/dist/js/tether.min.js',
	'./node_modules/angular/angular.min.js',
	'./node_modules/angular-route/angular-route.min.js',
	'./node_modules/angular-aria/angular-aria.min.js',
	'./node_modules/angular-animate/angular-animate.min.js',
	'./node_modules/angular-material/angular-material.min.css',
	'./node_modules/angular-material/angular-material.min.js',
	'./node_modules/ng-file-model/ng-file-model.js',
	'./node_modules/angular-loading-bar/build/loading-bar.min.css',
	'./node_modules/angular-loading-bar/build/loading-bar.min.js'
];

gulp.task('build-lib', function() {
	return gulp.src(LIBRARIES, {
		base: './node_modules'
	})
	.pipe(gulp.dest(DEST + '/lib'));
});

gulp.task('build-css', function() {
	return gulp.src(SRC + '/sass/style.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulpif(args.pro, uglifycss({
		"maxLineLen": 80,
		"uglyComments": true
	})))
	.pipe(gulp.dest(DEST + '/css'));
});

var JAVASCRIPTS = [
	SRC + '/js/app.js'
];

gulp.task('build-js', function() {
	return gulp.src(JAVASCRIPTS)
	.pipe(concat('main.js'))
	.pipe(gulpif(args.pro, ngmin()))
	.pipe(gulpif(args.pro, uglify()))
	.pipe(gulp.dest(DEST + '/js'));
});

var INJECTRES = [
	DEST + '/lib/roboto-fontface/css/roboto/roboto-fontface.css',
	DEST + '/lib/font-awesome/css/font-awesome.min.css',
	DEST + '/lib/moment/min/moment.min.js',
	DEST + '/lib/tether/dist/css/tether.min.css',
	DEST + '/lib/tether/dist/js/tether.min.js',
	DEST + '/lib/angular/angular.min.js',
	DEST + '/lib/angular-route/angular-route.min.js',
	DEST + '/lib/angular-aria/angular-aria.min.js',
	DEST + '/lib/angular-animate/angular-animate.min.js',
	DEST + '/lib/angular-material/angular-material.min.css',
	DEST + '/lib/angular-material/angular-material.min.js',
	DEST + '/lib/angular-loading-bar/build/loading-bar.min.css',
	DEST + '/lib/angular-loading-bar/build/loading-bar.min.js',
	DEST + '/lib/ng-file-model/ng-file-model.js',
	DEST + '/css/style.css',
	DEST + '/js/main.js'
];

gulp.task('build-html', ['build-media', 'build-lib', 'build-css', 'build-js'], function() {
	var re = new RegExp('/' + DEST + '/', 'g');
	return gulp.src(SRC + '/**/*.html', {
		base: SRC
	})
	.pipe(inject(gulp.src(INJECTRES, {
		read: false
	})))
	.pipe(removeHtmlComments())
	.pipe(replace(re, ''))
	.pipe(gulp.dest(DEST));
});

gulp.task('build-html-lite', function() {
	var re = new RegExp('/' + DEST + '/', 'g');
	return gulp.src(SRC + '/**/*.html', {
		base: SRC
	})
	.pipe(inject(gulp.src(INJECTRES, {
		read: false
	})))
	.pipe(removeHtmlComments())
	.pipe(replace(re, ''))
	.pipe(gulp.dest(DEST));
});

gulp.task('build', ['build-html'], function() {
	// NOTHING
});

gulp.task('live-load', function() {
	gulp.watch(SRC + '/sass/style.scss', ['build-css']); 
	gulp.watch(SRC + '/**/*.html', ['build-html-lite']);
	gulp.watch(JAVASCRIPTS, ['build-js']);
});

gulp.task('serve', ['build', 'live-load'], function() {
	return gulp.src('')
	.pipe(webserver({
		livereload: true,
		directoryListing: true,
		open: true,
		host: 'localhost',
		port: 8088,
		open: DEST + '/index.html',
		fallback: 'index.html'
	}));
});

gulp.task('clean', function() {
	return gulp.src(DEST, {read: false})
	.pipe(clean());
});