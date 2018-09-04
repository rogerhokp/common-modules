import { Module } from '@nestjs/common';
import AuditLoggerModule from './AuditLoggerModule';

@Module({})
export class MongooseModule {
    static forRoot({ loggerPath, loggerVersion }) {
        return {
            module: MongooseModule,
            imports: [AuditLoggerModule.forRoot(loggerPath, loggerVersion)]
        };
    }
}

