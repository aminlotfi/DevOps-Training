const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();

gulp.task('gulp_nodemon', function() {
    nodemon({
        script: 'server.js', //this is where my express server is
        ext: 'js html css', //nodemon watches *.js, *.html and *.css files
        env: { 'NODE_ENV': 'development' }
    });
});

gulp.task('sync', function() {
    browserSync.init({
        watch: true,
        port: 3000,
        proxy: 'http://localhost:3001/',
        reloadDelay: 1000
    });
    gulp.watch(['./**/*.js', './**/*.html', './**/*.css']).on("change", browserSync.reload);
});

exports.build = gulp.parallel(["gulp_nodemon", "sync"]);