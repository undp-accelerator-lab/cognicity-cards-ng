export const environment = {
  production: false,
  stage: 'dev',
  deployment: 'jp',

  supportedDecks: [
    { path: 'flood', loadChildren: './flood/flood.module#FloodModule'}
  ],
};
