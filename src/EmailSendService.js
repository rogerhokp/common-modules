
import { Injectable } from '@nestjs/common';
import sgMail from '@sendgrid/mail';
import { readFileSync } from 'fs';

@Injectable()
export default class EmailSendService {

    /**
     * 
     * @param {string} apiKey 
     * @param {string} emailFrom 
     */
    constructor(apiKey, emailFrom) {
        sgMail.setApiKey(apiKey);
        this.emailFrom = emailFrom;
    }

    /**
     * 
     * @param {{emailTos: Array<string>, subject: string, content: string, templateId:string, templateData: object, attachments: []}}  
     */
    send({ emailTos, subject, content, templateId, templateData, attachments }) {

        const eamilAttachments = attachments && attachments.map(({ path, filename }) => {
            let bitmap = readFileSync(path);
            return {
                content: new Buffer(bitmap).toString('base64'),
                filename,
                contentId: 'file-' + filename
            };
        });

        const msg = {
            to: emailTos,
            from: this.emailFrom,
            subject: subject,
            html: content,
            templateId: templateId,
            dynamic_template_data: templateData,
            attachments: eamilAttachments
        };
        return sgMail.send(msg);
    }

}
