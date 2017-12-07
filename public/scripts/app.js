'use strict';

require('./utils.js');

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('webpack started');

console.log(_validator2.default.isEmail('m.wisniewicz@gmail.com'));
