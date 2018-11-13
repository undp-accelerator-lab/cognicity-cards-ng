import gulp from 'gulp';
import del from 'del';

export default gulp.task('clearPreviousAssets', (done) => {
  del([
    '../src/assets/icons',
    '../src/assets/images',
    '../src/assets/locales',
    '../src/assets/logos',
    '../src/resources/*',
    'src/index.html'
  ], {force: true}); // Force deleting outside Current Working Directory

  done();
});
