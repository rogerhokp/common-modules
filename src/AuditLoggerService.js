
import { init, logger } from './index';

export default class AuditLoggerService {

    constructor(path, version) {
        init(path, version);
    }

    log(data) {
        logger(data);
    }

}
