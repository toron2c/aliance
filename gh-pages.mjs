import gulp from 'gulp'
import ghPages from 'gulp-gh-pages'

export function deploy() {
	return gulp.src('./dist/**/*')
	.pipe(ghPages())
}


export default deploy;