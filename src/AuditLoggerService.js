
import { init, logger } from './index';
import { Injectable, Dependencies } from '@nestjs/common';

@Injectable()
export default class AuditLoggerService {

    constructor(path, version) {
        init(path, version);
    }

    log(data) {
        logger(data);
    }

}
