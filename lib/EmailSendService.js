'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _class;

var _common = require('@nestjs/common');

var _mail = require('@sendgrid/mail');

var _mail2 = _interopRequireDefault(_mail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let EmailSendService = (_dec = (0, _common.Injectable)(), _dec(_class = class EmailSendService {

    /**
     * 
     * @param {string} apiKey 
     * @param {string} emailFrom 
     */
    constructor(apiKey, emailFrom) {
        _mail2.default.setApiKey(apiKey);
        this.emailFrom = emailFrom;
    }

    /**
     * 
     * @param {{mailTos: Array<string>, subject: string, content: string}  
     */
    send({ mailTos, subject, content }) {
        const msg = {
            to: mailTos,
            from: this.emailFrom,
            subject: subject,
            html: content
        };
        return _mail2.default.send(msg);
    }

}) || _class);
exports.default = EmailSendService;