import gulp from 'gulp';
import changedInPlace from 'gulp-changed-in-place';
import change from 'gulp-change';
import rename from 'gulp-rename';
import parseArgs from 'minimist';

const args = parseArgs(process.argv.slice(2));
const dep = args.dep;
const stage = args.environment;

const compileCardRoutes = (content) => {
  console.log(stage);

  const env = JSON.parse(content.toString());
  const decks = env.decks;

  const deckRoutes = [];
  for (const deck of decks) {
    const name = deck.name;

    deckRoutes.push(
      {
        path: name,
        loadChildren: './' + name + '/' + name + '.module#'
          + name.charAt(0).toUpperCase() + name.substr(1) + 'Module'
      }
    )
  }

  const cardRoutes = {};
  for (const deck of decks) {
    cardRoutes[deck.name] = [];

    for (const card of deck.cards) {
      cardRoutes[deck.name].push(
        {
          path: card,
          loadChildren: '../../cards/' + card + '/' + card + '.module#'
            + card.charAt(0).toUpperCase() + card.substr(1) + 'Module',
          data: {preload: true}
        }
      );
    }
  }

  delete env.decks;

  env.supportedDecks = deckRoutes;
  env.supportedCards = cardRoutes;

  return 'export const environment = ' + JSON.stringify(env);
};

// Required for local development only using ng serve
export default gulp.task('fetchEnvironment', () => {
  return gulp
  .src([`src/environments/${dep}/*.json`])
  .pipe(change(compileCardRoutes))
  .pipe(rename((path) => {
    path.extname = '.ts'
  }))
  .pipe(changedInPlace({firstPass: true}))
  .pipe(gulp.dest(`src/environments/${dep}`));
});
