import gulp from 'gulp';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import parseArgs from 'minimist';

const args = parseArgs(process.argv.slice(2));
const deck = args.deck;

const destination = `../src/app/routes/decks/${deck}`;

const fileRename = (path) => {
  const name = path.basename;
  return path.basename = name.replace('deck', deck);
};

gulp.task('modifyView', () => {
  return gulp
  .src([`../templates/decks/*.html`])
  .pipe(rename(fileRename))
  .pipe(gulp.dest(destination));
});

gulp.task('modifyStylesheet', () => {
  return gulp
  .src([`../templates/decks/*.scss`])
  .pipe(rename(fileRename))
  .pipe(gulp.dest(destination));
});

gulp.task('modifyModels', () => {
  return gulp
  .src([`../templates/decks/*.ts`])
  .pipe(replace(
    'Deck',
    deck.charAt(0).toUpperCase() + deck.substr(1)
  ))
  .pipe(replace('deck', deck))
  .pipe(rename(fileRename))
  .pipe(gulp.dest(destination));
});

gulp.task('default',
  gulp.parallel(
    'modifyView',
    'modifyStylesheet',
    'modifyModels'
  )
);
