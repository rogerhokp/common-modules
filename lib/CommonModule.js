'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _class;

var _common = require('@nestjs/common');

var _AuditLoggerModule = require('./AuditLoggerModule');

var _AuditLoggerModule2 = _interopRequireDefault(_AuditLoggerModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CommonModule = (_dec = (0, _common.Module)({}), _dec(_class = class CommonModule {
    static forRoot({ loggerPath, loggerVersion }) {
        return {
            module: CommonModule,
            imports: [_AuditLoggerModule2.default.forRoot(loggerPath, loggerVersion)]
        };
    }
}) || _class);
exports.default = CommonModule;