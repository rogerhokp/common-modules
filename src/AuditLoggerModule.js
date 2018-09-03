import { AuditLoggerService } from './AuditLoggerService';
import { Module } from '@nestjs/common';


@Module({})
class AuditLoggerModule {
  static forRoot(path, version) {
    const providers = [
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
 
export default AuditLoggerModule;
