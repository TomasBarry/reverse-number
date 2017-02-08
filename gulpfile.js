// Define gulpfile imports
const del = require('del');
const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const jshint = require('gulp-jshint');
const es2015 = require('babel-preset-es2015');

/**
 * The workflow for this gulpfile is as follows:
 * 1) babel-source:
 *        Take all ES6 source files and convert them to es2015
 *        These es2015 files are the basis of all other tasks
 * 2) clean:
 *        Delete the old babel and build directory
 * 3) concat:
 *        Concatenate all es2015 files into a single file in the babel directory
 * 4) compress:
 *        Take the concatenated file (in the babel directory) and compress it
 *        This task leaves a compressed file in the build directory and is the executable
 */

// Gulpfile constants
const babel_dir = 'babel';
const babel_dir_files = babel_dir + '/**/*.js';
const concat_file = 'concat.js';
const min_file_ext = '-min.js';
const build_dir = 'build';
const lib_files = 'lib/**/*.js';
const test_files = 'test/**/*.js';
const source_files = [
	'index.js',
	lib_files
];
const babel_presets = {
	presets: [es2015]
};

// Tasks
gulp.task('clean', () => {
	return del([build_dir, babel_dir]);
});

gulp.task('babel-source', gulp.series('clean', () => {
	return gulp.src(source_files)
		.pipe(babel(babel_presets))
		.pipe(gulp.dest(babel_dir));
}));

gulp.task('concat', gulp.series('babel-source', () => {
	return gulp.src(babel_dir_files)
		.pipe(concat(concat_file))
    		.pipe(gulp.dest(babel_dir));
}));

gulp.task('compress', gulp.series('concat', () => {
	return gulp.src(babel_dir + '/' + concat_file)
		.pipe(minify({
			ext: {
				min: min_file_ext
			},
			noSource: true
		}))
		.pipe(gulp.dest(build_dir));
}));

gulp.task('lint', () => {
	return gulp.src(source_files)
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'));
});

// build the project
gulp.task('build', gulp.series('clean', 'lint', 'compress'));

// The default task (called when you run `gulp` from cli) 
gulp.task('default', gulp.series('clean', 'lint'));
