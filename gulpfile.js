const gulp = require('gulp');
 const sourcemaps = require('gulp-sourcemaps');
 
 
// const gulpUglify = require("gulp-uglify");
//const gulpChanged = require("gulp-changed");
// const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');
// const imagemin = require('gulp-imagemin');
// const del = require('del');

const gulpCssnano = require('gulp-cssnano');
const gulp_postcss = require( "gulp-postcss" );
const cssnext = require( "postcss-cssnext" );
const lost = require('lost');
const rucksack = require('gulp-rucksack');
const cssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');




gulp.task('css',  () => {

    const srcCss = './stylesheets/source/**/*.css';
    const dstCss = './stylesheets';
        
    
    const processors =
        [
            cssImport,
            cssnext({}),
            lost,
            autoprefixer({ browsers: ['last 2 versions'] })
        ];

    return gulp.src(srcCss)
        .pipe(sourcemaps.init())
        .pipe(gulp_postcss(processors))
        .pipe(rucksack())
        .pipe(gulpCssnano())
        .pipe(sourcemaps.write('./gulp_sourcemaps'))
        .pipe(gulp.dest(dstCss));
});

gulp.task('watch:css', () => {

    const watchCss = './stylesheets/source/**/.*.css';
    
    gulp.watch(watchCss, ['css']);
});

const ts = require("gulp-typescript");
const tsProject = ts.createProject('tsconfig.json');

gulp.task('ts:c', (  ) => {
    const tsResult = tsProject.src().pipe(ts(tsProject));
    return tsResult.js.pipe(gulp.dest(''));    
});


gulp.task('default', () => {

});