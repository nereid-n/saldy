'use strict';

const gulp = require('gulp'),
  sass = require('gulp-sass'),
  babel = require('gulp-babel'),
  concat = require('gulp-concat'),
  pug = require('gulp-pug'),
  browserSync = require('browser-sync').create(),
  plumber = require('gulp-plumber'),
  sourcemaps = require('gulp-sourcemaps'),
  gulpPugBeautify = require('gulp-pug-beautify'),
  autoprefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  svgstore = require('gulp-svgstore'),
  svgmin = require('gulp-svgmin');

// For developing
gulp.task('pug', function () {
  return gulp.src('./src/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({pretty: true}))
    .pipe(gulpPugBeautify({omit_empty: false}))
    .pipe(gulp.dest('./dist'));
});
gulp.task('css', function () {
  gulp.src(['./src/shared/sass/**/*.sass', './src/components/**/*.sass'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 5 versions', 'Android >= 3', 'Firefox ESR', 'Opera 12.1']
    }))
    .pipe(gulp.dest('./dist/assets/css'));
});
gulp.task('js', function () {
  gulp.src(['./src/shared/js/**/*.js', './src/components/**/*.js'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('script.js'))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/assets/js'))
});

gulp.task('libs', function () {
  return gulp.src('./src/libs/**/*')
    .pipe(gulp.dest('./dist/assets/libs'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('images', function () {
  return gulp.src('./src/images/**/*')
    .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('fonts', function () {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./dist/assets/fonts'));
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    open: false,
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "Craft Group"
  });
});

gulp.task('watch', ['pug', 'css', 'js'], function () {
  gulp.watch(['src/components/**/*.pug', 'src/pages/*'], ['pug']).on('change', browserSync.reload);
  gulp.watch(['src/components/**/*.sass', './src/shared/sass/**/*.sass'], ['css']).on('change', browserSync.reload);
  gulp.watch(['src/components/**/*.js', './src/shared/js/**/*.js'], ['js']).on('change', browserSync.reload);

  gulp.watch('./dist/*').on('change', browserSync.reload);
});

// building svg sprite if needed, then add 'svg-sprite' to build or default
gulp.task('svg-grayscale', function () {

  return gulp.src('./src/images/svg/*.svg')
    .pipe(cheerio({
      run: function ($) {
        let fill = $('[fill]:not(.fill)');
        let style = $('[style]');
        let stroke = $('[stroke]');
        for (let i = 0; i < fill.length; i++) {
          fill[i].removeAttribute('fill');
        }
        for (let j = 0; j < style.length; j++) {
          style[j].removeAttribute('style');
        }
        for (let k = 0; k < stroke.length; k++) {
          stroke[k].removeAttribute('stroke');
        }
      },
      parserOptions: {
        xmlMode: true
      }
    }))
    .pipe(gulp.dest('./src/images/svg'));

});


gulp.task('svg-sprite', ['svg-grayscale'], function () {

  return gulp.src('./src/images/svg/*.svg')
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(gulp.dest('./dist/assets/images'));

});

// For building
gulp.task('pug-build', function () {
  return gulp.src('./src/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({pretty: true}))
    .pipe(gulpPugBeautify({omit_empty: false}))
    .pipe(gulp.dest('./build'));
});

gulp.task('css-build', function () {
  gulp.src(['./src/shared/sass/**/*.sass', './src/components/**/*.sass'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 5 versions', 'Android >= 3', 'Firefox ESR', 'Opera 12.1']
    }))
    .pipe(gulp.dest('./build/assets/css'));
});

gulp.task('js-build', function () {
  gulp.src(['./src/shared/js/**/*.js', './src/components/**/*.js'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('script.js'))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/assets/js'))
});

gulp.task('libs-build', function () {
  return gulp.src('./src/libs/**/*')
    .pipe(gulp.dest('./build/assets/libs'));
});

gulp.task('images-build', function () {
  return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/assets/images'));
});

gulp.task('fonts-build', function () {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./build/assets/fonts'));
});

// Commands
gulp.task('build', ['pug-build', 'css-build', 'js-build', 'libs-build', 'images-build', 'fonts-build']);
gulp.task('default', ['watch', 'libs', 'images', 'fonts', 'browser-sync']);
