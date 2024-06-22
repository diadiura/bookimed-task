const { src, dest, watch, parallel } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
// const browserSync = require("browser-sync").create();
// const autoprefixer = require("gulp-autoprefixer");

function styles() {
  return src("./src/scss/*.scss")
    // .pipe(autoprefixer({ overrideBrowserslist: ["last 10 version"] }))
    .pipe(concat("style.min.css "))
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(dest("./build/css"));
    // .pipe(browserSync.stream());
}

function scripts() {
  return src("./src/js/*.js")
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("./build/js"))
    // .pipe(browserSync.stream());
}

// function watching() {
//   watch(["./src/scss/*.scss"], styles);
//   watch(["./src/js/*.js"], scripts);
//   watch(["./**/*.html"]).on("change", browserSync.reload);
// }

// function browsersync() {
//   browserSync.init({
//     server: {
//       baseDir: "src/",
//     },
//   });
// }

exports.styles = styles;
exports.scripts = scripts;
// exports.watching = watching;
// exports.browsersync = browsersync;

exports.default = parallel(styles, scripts); //browsersync, watching
