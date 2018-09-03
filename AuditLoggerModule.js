const { AuditLoggerService } = require('./AuditLoggerService');

module.exports = class AuditLoggerModule {
 static forRoot(path, version) {
    const providers =  [   
        {
            provide: AuditLoggerService,
            useFactory: () => new AuditLoggerService(path, version)
        }
    ];
    return {
      module: AuditLoggerModule,
      providers: providers,
      exports: providers,
    };
  }
}
