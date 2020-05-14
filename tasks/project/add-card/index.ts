import gulp from 'gulp';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import parseArgs from 'minimist';

const args = parseArgs(process.argv.slice(2));
const card = args.card;

const destination = `../src/app/routes/cards/${card}`;

const fileRename = (path) => {
  const name = path.basename;
  return path.basename = name.replace('card', card);
};

gulp.task('modifyModels', () => {
  return gulp
  .src([`../templates/cards/*.ts`])
  .pipe(replace(
    'Card',
    card.charAt(0).toUpperCase() + card.substr(1)
  ))
  .pipe(replace('card', card))
  .pipe(rename(fileRename))
  .pipe(gulp.dest(destination));
});

gulp.task('default',
  gulp.parallel(
    'modifyModels'
  )
);
