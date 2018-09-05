var tslint = require("gulp-tslint");
var gulp = require("gulp");

var tslintOptions = {
    formatter: "verbose",
    configuration: "./tslint.json"
};

var reportOptions = {
    emitError: true
}

gulp.task("tslint", () =>
    gulp.src("./src/**/*.tsx")
        .pipe(tslint(tslintOptions))
        .pipe(tslint.report(reportOptions))
);