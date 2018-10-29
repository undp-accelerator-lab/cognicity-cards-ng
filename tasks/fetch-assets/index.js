const gulp = require('gulp');
const del = require('del');
const changedInPlace = require('gulp-changed-in-place');
const parseArgs = require('minimist');

// Parse deployment key from cli
const args = parseArgs(process.argv.slice(2));
const dep = args.dep;

const deploymentMap = {
  jp: 'Japan, riskmap.jp',
  in: 'India, riskmap.in',
  us: 'USA, riskmap.us'
};

if (dep === 'jp' || dep === 'in' || dep === 'us') {
  console.log('Specified deployment is ' + deploymentMap[dep]);
} else {
  throw 'No deployment specified, prefix dep=jp|in|us to command';
}

gulp.task('clearPreviousAssets', () => {
  return del([
    '../src/assets/icons',
    '../src/assets/images',
    '../src/assets/locales',
    '../src/assets/logos',
    '../src/resources/*',
    '../src/index.html',
    '../src/environments/environment.ts'
  ], {force: true}); // Force deleting outside CWD
});

// Required for local development only using ng serve
gulp.task('fetchDevEnvironment', () => {
  return gulp
  .src([`../src/environments/${dep}/environment.ts`])
  .pipe(changedInPlace({firstPass: true}))
  .pipe(gulp.dest('../src/environments/'));
});

gulp.task('fetchAssets', () => {
  return gulp
  .src([`../deployments/${dep}/assets/**/*`])
  .pipe(changedInPlace({firstPass: true}))
  .pipe(gulp.dest('../src/assets/'));
});

gulp.task('fetchResources', () => {
  return gulp
  .src([`../deployments/${dep}/resources/**/*`])
  .pipe(changedInPlace({firstPass: true}))
  .pipe(gulp.dest('../src/resources/'));
});

gulp.task('fetchHTML', () => {
  return gulp
  .src([`../deployments/${dep}/index.html`])
  .pipe(changedInPlace({firstPass: true}))
  .pipe(gulp.dest('../src/'));
});

gulp.task('default', [
  'clearPreviousAssets',
  'fetchAssets',
  'fetchResources',
  'fetchHTML'
]);
