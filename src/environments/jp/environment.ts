// TODO: try gulp task
// const decks = [
//   {
//     name: 'flood',
//     cards: [
//       'location',
//       'depth',
//       'photo',
//       'description',
//       'review'
//     ]
//   }
// ];
//
// const getDecks = () => {
//   const deckRoutes = [];
//
//   for (const deck of decks) {
//     const name = deck.name;
//
//     deckRoutes.push(
//       {
//         path: name,
//         loadChildren: './' + name + '/' + name + '.module#'
//           + name.charAt(0).toUpperCase() + name.substr(1) + 'Module'
//       }
//     )
//   }
//
//   return deckRoutes;
// };
//
// const getCards = () => {
//   const cardRoutes = {};
//
//   for (const deck of decks) {
//     cardRoutes[deck.name] = [];
//
//     for (const card of deck.cards) {
//       cardRoutes[deck.name].push(
//         {
//           path: card,
//           loadChildren: './' + card + '/' + card + '.module#'
//             + card.charAt(0).toUpperCase() + card.substr(1) + 'Module',
//           data: {preload: true}
//         }
//       );
//     }
//   }
//
//   return cardRoutes;
// };

export const environment = {
  production: false,
  stage: 'dev',
  deployment: 'jp',

  // TODO: Try gulp task
  // supportedDecks: getDecks(),
  // supportedCards: getCards(),

  supportedDecks: [
    { path: 'flood', loadChildren: './flood/flood.module#FloodModule'}
  ],

  supportedCards: {
    flood: [
      {
        path: 'location',
        loadChildren: '../../cards/location/location.module#LocationModule',
        data: {preload: true}
      },
      {
        path: 'depth',
        loadChildren: '../../cards/depth/depth.module#DepthModule',
        data: {preload: true}
      },
      {
        path: 'photo',
        loadChildren: '../../cards/photo/photo.module#PhotoModule',
        data: {preload: true}
      },
      {
        path: 'description',
        loadChildren: '../../cards/description/description.module#DescriptionModule',
        data: {preload: true}
      },
      {
        path: 'review',
        loadChildren: '../../cards/review/review.module#ReviewModule',
        data: {preload: true}
      }
    ]
  },
};
