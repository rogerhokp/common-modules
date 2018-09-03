
const { init, logger } = require('index');

module.expoerts = class AuditLoggerService {

    constructor(path, version) {
        init(path, version);
    }

    log(data) {
        logger(data);
    }

}
