import gulp from "gulp";
import sourcemaps from "gulp-sourcemaps";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import uglify from "gulp-uglify";
import obfuscate from "gulp-obfuscate";
import imagemin from "gulp-imagemin";

const sass = gulpSass(dartSass);

function compileSass() {
  console.time("Compiling Sass Files");
  let stream = gulp
    .src("./source/styles/main.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./build/styles/"));
  console.timeEnd("Compiling Sass Files");
  return stream;
}

function compressJS() {
  console.time("Compressing JS Files");
  let stream = gulp
    .src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest("./build/scripts/"));
  console.timeEnd("Compressing JS Files");
  return stream;
}

function compressImages() {
  console.time("Compressing image Files");
  let stream = gulp
    .src("./source/assets/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/assets/images"));
  console.timeEnd("Compressing image Files");
  return stream;
}

export default function build(gulpSignalCallback) {
  compileSass();
  compressJS();
  compressImages();

  gulpSignalCallback();
}

export function watchAll() {
  console.log("\nGulp is watching!\n");
  gulp.watch(
    ["./source/styles/*", "./source/scripts/*", "./source/assets/images/*"],
    { ignoreInitial: false },
    gulp.series(build)
  );
}
