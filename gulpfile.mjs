import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import plumber from 'gulp-plumber';
import mozjpeg from 'imagemin-mozjpeg';
import optipng from 'imagemin-optipng';
import svgo from 'imagemin-svgo';

import cssbeautify from 'gulp-cssbeautify'
import browserSync from 'browser-sync'


function styles() {
	return gulp.src('./app/css/index.css')
	.pipe(cssbeautify({
		indent: '  ',
		autosemicolon: true
	}))
	.pipe(gulp.dest('./dist/css'))
	.pipe(browserSync.stream())
}
function scripts() {
	return src(['./app/scripts/*.js'])
		.pipe(dest('./dist/scripts/'))
		.pipe(browserSync.stream())
}

function watcher() {
	watch('./app/css/*.css', styles)
	watch('./app/scripts/*.js', scripts)
	watch('./app/*.html').on('change', browserSync.reload)
}

export function images() {
	return gulp.src(['app/images/*.*'])
	.pipe(plumber()) // Обработка ошибок
	.pipe(imagemin())
	.pipe(gulp.dest('dist/images/'));
}



function browsersync() {
	browserSync.init({
		server: {
				baseDir: "app/"
		}
});
}

function build() {
	return src(['./app/*.html', './app/css/index.css', './app/images/*.*', './app/fonts/*.*', './app/scripts/*.js'], {base: 'app'})
	.pipe(dest('./dist/'))
}

export {images as default}