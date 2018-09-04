'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _class;

var _index = require('./index');

var _common = require('@nestjs/common');

let AuditLoggerService = (_dec = (0, _common.Injectable)(), _dec(_class = class AuditLoggerService {

    constructor(path, version) {
        (0, _index.init)(path, version);
    }

    log(data) {
        (0, _index.logger)(data);
    }

}) || _class);
exports.default = AuditLoggerService;