var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var rename = require("gulp-rename");
var minifyCss = require('gulp-minify-css');

gulp.task('default', function () {
	gulp.src(['icons/*.svg'])
		.pipe(iconfont({
			fontName: 'square-file'
		}))
		.on('codepoints', function (codepoints, options) {
			gulp.src('template.css')
				.pipe(consolidate('lodash', {
					glyphs: codepoints,
					fontName: 'square-file',
					fontPath: '../fonts/',
					className: 'sf',
					normalize: true,
				}))
				.pipe(rename({basename: 'square-file'}))
				.pipe(gulp.dest('dist/css/'))
				.pipe(minifyCss())
				.pipe(rename({suffix: '.min'}))
				.pipe(gulp.dest('dist/css/'));
		})
		.pipe(gulp.dest('dist/fonts/'));
});
