
import { Injectable } from '@nestjs/common';
import sgMail from '@sendgrid/mail';


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
     * @param {{mailTos: Array<string>, subject: string, content: string}  
     */
    send({ mailTos, subject, content }) {
        const msg = {
            to: mailTos,
            from: this.emailFrom,
            subject: subject,
            html: content,
        };
        return sgMail.send(msg);
    }

}
