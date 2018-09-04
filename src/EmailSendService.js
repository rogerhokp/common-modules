
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
     * @param {{emailTos: Array<string>, subject: string, content: string}  
     */
    send({ emailTos, subject, content }) {
        const msg = {
            to: emailTos,
            from: this.emailFrom,
            subject: subject,
            html: content,
        };
        return sgMail.send(msg);
    }

}
