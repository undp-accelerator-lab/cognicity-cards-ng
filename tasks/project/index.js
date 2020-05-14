'use strict';

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpRename = require('gulp-rename');

var _gulpRename2 = _interopRequireDefault(_gulpRename);

var _gulpReplace = require('gulp-replace');

var _gulpReplace2 = _interopRequireDefault(_gulpReplace);

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var args = (0, _minimist2.default)(process.argv.slice(2));
var card = args.card;

var destination = '../src/app/routes/cards/' + card;

var fileRename = function fileRename(path) {
  var name = path.basename;
  return path.basename = name.replace('card', card);
};

_gulp2.default.task('modifyModels', function () {
  return _gulp2.default.src(['../templates/cards/*.ts']).pipe((0, _gulpReplace2.default)('Card', card.charAt(0).toUpperCase() + card.substr(1))).pipe((0, _gulpReplace2.default)('card', card)).pipe((0, _gulpRename2.default)(fileRename)).pipe(_gulp2.default.dest(destination));
});

_gulp2.default.task('default', _gulp2.default.parallel('modifyModels'));
