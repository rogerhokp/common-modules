const { AuditLoggerService } = require('./AuditLoggerService');

export class AuditLoggerModule {
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
