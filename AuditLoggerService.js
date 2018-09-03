
const { init, logger } = rquire('index');

module.expoerts = class AuditLoggerService {

    constructor(path, version) {
        init(path, version);
    }

    log(data) {
        logger(data);
    }

}
