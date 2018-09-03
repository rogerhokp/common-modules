
import { Injectable } from '@nestjs/common';
import { init, logger } from 'audit-logger';

@Injectable()
export default class AuditLoggerService {

    constructor(path, version) {
        init(path, version);
    }

    log(data) {
        logger(data);
    }

}
