'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class;

var _AuditLoggerService = require('./AuditLoggerService');

var _common = require('@nestjs/common');

let AuditLoggerModule = (_dec = (0, _common.Module)({}), _dec(_class = class AuditLoggerModule {
  static forRoot(path, version) {
    const providers = [{
      provide: _AuditLoggerService.AuditLoggerService,
      useFactory: () => new _AuditLoggerService.AuditLoggerService(path, version)
    }];
    return {
      module: AuditLoggerModule,
      providers: providers,
      exports: providers
    };
  }
}) || _class);
exports.default = AuditLoggerModule;