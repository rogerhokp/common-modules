'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _class;

var _common = require('@nestjs/common');

var _mail = require('@sendgrid/mail');

var _mail2 = _interopRequireDefault(_mail);

var _fs = require('fs');

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
     * @param {{emailTos: Array<string>, subject: string, content: string, templateId:string, templateData: object, attachments: [], bccs: Array<string> }}  
     */
    send({ emailTos, subject, content, templateId, templateData, attachments, bccs }) {

        const emailAttachments = attachments && attachments.map(({ path, filename }) => {
            let bitmap = (0, _fs.readFileSync)(path);
            return {
                content: new Buffer(bitmap).toString('base64'),
                filename,
                contentId: 'file-' + filename
            };
        });

        const msg = {
            to: emailTos,
            from: this.emailFrom,
            bcc: bccs ? bccs : undefined,
            subject: subject,
            html: content,
            templateId: templateId,
            dynamic_template_data: templateData,
            attachments: emailAttachments
        };
        return _mail2.default.send(msg);
    }

}) || _class);
exports.default = EmailSendService;