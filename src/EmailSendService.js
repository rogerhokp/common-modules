
import { init, logger } from './index';
import { Injectable } from '@nestjs/common';
import sgMail from '@sendgrid/mail';


@Injectable()
export default class EmailSendService {

    constructor(apiKey, emailFrom) {
        sgMail.setApiKey(apiKey);
        this.emailFrom = emailFrom;
    }

    send(mailTos, subject, content) {
        const msg = {
            to: mailTos,
            from: this.emailFrom,
            subject: subject,
            html: content,
        };
        sgMail.send(msg);
    }

}
