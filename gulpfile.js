var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var rename = require("gulp-rename");
var minifyCss = require('gulp-minify-css');


function endsWith(str, suffix) {
	return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
function cutOff(str, length) {
	return str.substring(0, str.length - length);
}
function glyphReverseName(name) {
	if (endsWith(name, '-o')) {
		return cutOff(name, 2)
	} else {
		return name + '-o';
	}
}
function find(arr, fn) {
	for(var i in arr) {
		if (fn(arr[i])) {
			return arr[i];
		};
	}
}

function transformGlyphs(glyphs) {
	return glyphs.map(function(glyph) {
		switch(glyph.name) {
			case 'excel':
			case 'excel-o':
				glyph.color = '#08743b';
				break;
			case 'image':
			case 'image-o':
				glyph.color = '#5b2d8d';
				break;
			case 'pdf':
			case 'pdf-o':
				glyph.color = '#EA4C3A';
				break;
			case 'powerpoint':
			case 'powerpoint-o':
				glyph.color = '#DD5B26';
				break;
			case 'text':
			case 'text-o':
				glyph.color = '#6B533B';
				break;
			case 'word':
			case 'word-o':
				glyph.color = '#2372BA';
				break;
		}

		var revreseName = glyphReverseName(glyph.name);

		glyph.reverseGlyph = find(glyphs, function(val) {
			return val.name == revreseName;
		});

		return glyph;
	});
}

gulp.task('default', function () {
	gulp.src(['icons/*.svg'])
		.pipe(iconfont({
			fontName: 'square-file',
			formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
		}))
		.on('glyphs', function (glyphs, options) {
			gulp.src('template.css')
				.pipe(consolidate('lodash', {
					glyphs: transformGlyphs(glyphs),
					fontName: 'square-file',
					fontPath: '../fonts/',
					className: 'sf',
				}))
				.pipe(rename({basename: 'square-file'}))
				.pipe(gulp.dest('dist/css/'))
				.pipe(minifyCss())
				.pipe(rename({suffix: '.min'}))
				.pipe(gulp.dest('dist/css/'));
		})
		.pipe(gulp.dest('dist/fonts/'));
});
