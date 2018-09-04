import { Module } from '@nestjs/common';
import AuditLoggerModule from './AuditLoggerModule';

@Module()
export default class CommonModule {
    static forRoot({ loggerPath, loggerVersion }) {
        return {
            module: CommonModule,
            imports: [AuditLoggerModule.forRoot(loggerPath, loggerVersion)]
        };
    }
}

