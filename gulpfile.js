var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    ts = require("gulp-typescript");

// define tasks here
gulp.task("default", ["build"]);

gulp.task("build", function(){
	gulp
		.src([ "./typings/index.d.ts", "./src/*.ts"])
		.pipe(ts({
			noImplicitAny: false,
			out: "online-map-extension.js"
		}))
		.pipe(gulp.dest("./dist"))
		.pipe(rename("online-map-extension.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest("./dist"));
});

gulp.task("watch_sources", function () {
	gulp.watch(["./src/*.ts"], ["build"]);
})