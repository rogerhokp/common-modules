'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _index = require('./index');

let AuditLoggerService = class AuditLoggerService {

    constructor(path, version) {
        (0, _index.init)(path, version);
    }

    log(data) {
        (0, _index.logger)(data);
    }

};
exports.default = AuditLoggerService;