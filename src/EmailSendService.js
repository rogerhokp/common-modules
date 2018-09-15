
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
     * @param {{emailTos: Array<string>, subject: string, content: string, templateId:string, templateData: object, attachments: [], bccs: Array<string> }}  
     */
    send({ emailTos, subject, content, templateId, templateData, attachments, bccs }) {

        const emailAttachments = attachments && attachments.map(({ path, filename }) => {
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
            bccs: bccs ? bccs : undefined,
            subject: subject,
            html: content,
            templateId: templateId,
            dynamic_template_data: templateData,
            attachments: emailAttachments
        };
        return sgMail.send(msg);
    }

}
