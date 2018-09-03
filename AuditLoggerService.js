
const { init, logger } = require('./index');

exports.AuditLoggerService = class AuditLoggerService {

    constructor(path, version) {
        init(path, version);
    }

    log(data) {
        logger(data);
    }

}
