var gulp=require('gulp');
var browserSync=require('browser-sync');
var sass=require('gulp-sass');
var autoprefixer=require('gulp-autoprefixer');


gulp.task('sass',function(){
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass({outputStyle:'expanded'}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream:true
		}))

});

gulp.task('browserSync',function(){
	browserSync({
		server:{
			baseDir:'app'
		},
	})
})
gulp.task('autofx',function(){
	gulp.src('app/css/**/*.css')
		.pipe(autoprefixer({
			browsers:['>0.5%','Android>=2.3','ios 7'],
			cascade:true,
		}))
		.pipe(gulp.dest('app/css'));
});
gulp.task('watch',['browserSync','sass','autofx'],function(){
	gulp.watch('app/scss/**/*.scss',['sass']);
	gulp.watch('app/*.html',browserSync.reload);
	gulp.watch('app/js/**/*.js',browserSync.reload);
	gulp.watch('app/css/**/*.css',browserSync.reload);
})