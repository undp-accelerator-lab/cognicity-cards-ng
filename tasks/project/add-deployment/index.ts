import gulp from 'gulp';
import change from 'gulp-change';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
// import gulpif from 'gulp-if';
import parseArgs from 'minimist';

const args = parseArgs(process.argv.slice(2));
const dep = args.dep;

const modifyProdVariables = (content) => {
  const env = JSON.parse(content.toString());

  env.stage = 'prod';
  env.production = true;

  return JSON.stringify(env, null, 2) + '\n';
};

const addBuildScripts = (content) => {
  const packageConfig = JSON.parse(content.toString());
  const scripts = packageConfig.scripts;

  scripts[`build-dev-${dep}`] = `dep=${dep} npm run pre-build-tasks && `
  + `ng build --env=dev-${dep} --output-path='dist/dev-${dep}'`;

  scripts[`build-prod-${dep}`] = `dep=${dep} npm run pre-build-tasks && `
  + `ng build --prod --env=prod-${dep} --output-path='dist/prod-${dep}' `
  + `--build-optimizer --vendor-chunk=true --stats-json`;

  scripts[`build-prod-ngsw-${dep}`] = `npm run build-prod-${dep} && `
  + `node_modules/.bin/ngsw-config dist/prod-${dep} ./src/ngsw-config.json `
  + `&& cp node_modules/@angular/service-worker/ngsw-worker.js ./dist/prod-${dep}/ngsw-worker.js`;

  scripts['build-dev'] += ` && npm run build-dev-${dep}`;

  scripts['build-prod'] += ` && npm run build-prod-ngsw-${dep}`;

  packageConfig.scripts = scripts;

  return JSON.stringify(packageConfig, null, 2) + '\n';
};

const configureBuildMappings = (content) => {
  const seedConfig = JSON.parse(content.toString());
  const buildConfig = seedConfig.projects.Cards.architect.build.configurations;
  const serveConfig = seedConfig.projects.Cards.architect.serve.configurations;

  buildConfig[`dev-${dep}`] = {
    fileReplacements: [{
      replace: 'src/environments/environment.ts',
      with: `src/environments/${dep}/environment.ts`
    }]
  };

  buildConfig[`prod-${dep}`] = {
    optimization: true,
    outputHashing: 'all',
    sourceMap: false,
    extractCss: true,
    namedChunks: false,
    aot: true,
    extractLicenses: true,
    vendorChunk: false,
    buildOptimizer: true,
    fileReplacements: [{
      replace: 'src/environments/environment.ts',
      with: `src/environments/${dep}/environment.prod.ts`
    }]
  };

  serveConfig[`dev-${dep}`] = {browserTarget: `Cards:build:dev-${dep}`};
  serveConfig[`prod-${dep}`] = {browserTarget: `Cards:build:prod-${dep}`};

  seedConfig.projects.Cards.architect.build.configurations = buildConfig;
  seedConfig.projects.Cards.architect.serve.configurations = serveConfig;

  return JSON.stringify(seedConfig, null, 2) + '\n';
};

// gulp.task('checkExisting', (done) => {
//
// });

gulp.task('addDevEnvironment', () => {
  return gulp
  .src([`../templates/deployments/environment.json`])
  .pipe(replace('$dep', dep))
  .pipe(gulp.dest(`../src/environments/${dep}`));
});

gulp.task('addProdEnvironment', () => {
  return gulp
  .src([`../templates/deployments/environment.json`])
  .pipe(replace('$dep', dep))
  .pipe(change(modifyProdVariables))
  .pipe(rename((path) => path.basename += '.prod'))
  .pipe(gulp.dest(`../src/environments/${dep}`));
});

gulp.task('addDeploymentFiles', () => {
  return gulp
  .src([`../templates/deployments/{*/**,!(environment.json)}`]) // exclude environment.json
  .pipe(gulp.dest(`../deployments/${dep}`));
});

gulp.task('addScripts', () => {
  return gulp
  .src([`../package.json`])
  .pipe(change(addBuildScripts))
  .pipe(gulp.dest(`../`));
});

gulp.task('configureSeed', () => {
  return gulp
  .src([`../angular.json`])
  .pipe(change(configureBuildMappings))
  .pipe(gulp.dest(`../`));
});

gulp.task('default',
  gulp.series(
    // 'checkExisting',
    gulp.parallel(
      'addDevEnvironment',
      'addProdEnvironment',
      'addDeploymentFiles',
      'addScripts',
      'configureSeed'
    )
  )
);
