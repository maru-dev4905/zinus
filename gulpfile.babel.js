import Gulp from "gulp";
import gpug from "gulp-pug";
import del from "del";
import ws from "gulp-webserver";
import image from "gulp-image";
import sass from "gulp-sass";
import miniCSS from "gulp-csso";
import bro from "gulp-bro";
import babelify from "babelify";

sass.compiler = require("node-sass");

const routes = {
    pug: { 
        watch: "src/**/**/**/*.pug",
        src: "src/*.pug",
        dest: "build"
    },
    img: {
        src: "src/image/**/**",
        dest: "build/image"
    },
    sass: {
        watch: "src/scss/**/**/*.scss",
        src: "src/scss/zinus.scss",
        dest: "build/css"
    },
    js: {
        watch: "src/js/**/*.js",
        src: "src/js/*.js",
        dest: "build/js"
    },
    font: {
        src: "src/fonts/*.ttf",
        dest: "build/fonts"
    }
};

const pug = () =>
    Gulp
        .src(routes.pug.src)
        .pipe(gpug())
        .pipe(Gulp.dest(routes.pug.dest));

const styles = () =>
    Gulp
        .src(routes.sass.src)
        .pipe(sass().on("error", sass.logError))
        .pipe(miniCSS())
        .pipe(Gulp.dest(routes.sass.dest));    

const clean = () => del(["build/"]);

const webserver = () => 
    Gulp
        .src("build/")
        .pipe(ws({ livereload: true, open: true}));

const js = () => 
    Gulp
        .src(routes.js.src)
        .pipe(bro({
            transform: [
                babelify.configure({presets:["@babel/preset-env"]}),
                ["uglifyify", {global:true}]
            ]
        })
    ).pipe(Gulp.dest(routes.js.dest));

const font = () =>
        Gulp
            .src(routes.font.src)
            .pipe(Gulp.dest(routes.font.dest));

const watch = () => 
    Gulp.watch(routes.pug.watch, pug);
    Gulp.watch(routes.sass.watch, styles);
    Gulp.watch(routes.js.watch, js);

const img = () => 
    Gulp
        .src(routes.img.src)
        .pipe(image())
        .pipe(Gulp.dest(routes.img.dest));

const prepare = Gulp.series([clean, img]);

const assets = Gulp.series([pug, styles, js, font]);

const live = Gulp.parallel([webserver, watch]);

export const dev = Gulp.series([prepare, assets, live]);