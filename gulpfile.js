const {src, dest, watch, parallel} = require('gulp');
const cssbeautify = require('gulp-cssbeautify');
const browserSync = require('browser-sync').create();

function styles() {
	return src('./app/css/index.css')
	.pipe(cssbeautify({
		indent: '  ',
		autosemicolon: true
	}))
	.pipe(dest('./dist/css'))
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

exports.styles = styles;
exports.scripts = scripts;
exports.watcher = watcher;
exports.browsersync = browsersync;
exports.build = build;

exports.default = parallel(styles, scripts, browsersync, watcher)