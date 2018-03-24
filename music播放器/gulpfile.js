var gulp = require('gulp')
var imagemin = require('gulp-imagemin')
var htmlclean = require('gulp-htmlclean')
var uglify = require('gulp-uglify')
var stripdebug = require('gulp-strip-debug')
var concat = require('gulp-concat')
var deporder = require('gulp-deporder')
var less = require('gulp-less')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var cssnano = require('cssnano')
var connect = require('gulp-connect')

var folder = {
  src: 'src/',
  dist: 'dist/'
}
var model = process.env.NODE_ENV === 'production'
// process.env.NODE_ENV = 'production'
gulp.task('html', function () {
  var page = gulp.src(folder.src + 'html/index.html')
    .pipe(connect.reload())
  if (model) {
    page.pipe(htmlclean()) /* 压缩 html */
  }
  page.pipe(gulp.dest(folder.dist + 'html/'))
})

gulp.task('images', function () {
  gulp.src(folder.src + 'images/*')
    .pipe(imagemin()) /* 压缩图片 */
    .pipe(gulp.dest(folder.dist + 'images/'))
    .pipe(connect.reload())
})
// 默认任务
gulp.task('default', ['html', 'images', 'js', 'css', 'server', 'watch'])

gulp.task('js', function () {
  gulp.src(folder.src + 'js/*')
    .pipe(connect.reload())
    // .pipe(deporder()) /* 决定文件顺序 */
    // .pipe(concat('mian.js')) /* 和成一个文件 */
    .pipe(stripdebug()) /* 清除console and debugger */
    .pipe(uglify()) /* 压缩js */
    .pipe(gulp.dest(folder.dist + 'js/'))
})
gulp.task('css', function () {
  var page = gulp.src(folder.src + 'css/*')
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
  if (model) {
    page.pipe(postcss([cssnano()]))
  }
  page.pipe(gulp.dest(folder.dist + 'css/'))
    .pipe(connect.reload())
})
gulp.task('watch', function () {
  gulp.watch(folder.src + 'html/*', ['html'])
  gulp.watch(folder.src + 'css/*', ['css'])
  gulp.watch(folder.src + 'js/*', ['js'])
  gulp.watch(folder.src + 'images/*', ['images'])
})
gulp.task('server', function () {
  connect.server({
    port: '8081',
    livereload: true
  })
})
