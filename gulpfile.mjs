import gulp from 'gulp'
import {deleteAsync} from 'del'
import imagemin from 'gulp-image';
import deploy from './gh-pages.mjs';

const paths = {
  html: './app/*.html',
  css: './app/css/index.css',
  images: './app/images/*.*',
  fonts: './app/fonts/*.*',
  scripts: './app/scripts/*.js',
  dest: './dist'
};

export async function clean() {
  return await deleteAsync([paths.dest]);
}

export function copyHtml() {
  return gulp.src(paths.html, { base: 'app' })
    .pipe(gulp.dest(paths.dest));
}

export function copyCss() {
  return gulp.src(paths.css, { base: 'app' })
    .pipe(gulp.dest(paths.dest));
}

export function copyImages() {
  return gulp.src(paths.images, { base: 'app' })
		.pipe(imagemin())
    .pipe(gulp.dest(paths.dest));
}

export function copyFonts() {
  return gulp.src(paths.fonts, { base: 'app' })
    .pipe(gulp.dest(paths.dest));
}

export function copyScripts() {
  return gulp.src(paths.scripts, { base: 'app' })
    .pipe(gulp.dest(paths.dest));
}

const build = gulp.series(
  clean,
  gulp.parallel(copyHtml, copyCss, copyImages, copyFonts, copyScripts)
);


export { build, deploy };
export default build;

