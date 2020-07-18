import {inject} from '@loopback/core';
import {HttpErrors} from '@loopback/rest';
import * as nodemailer from 'nodemailer';
import {NodemailerBindings} from '../keys';

type mailObject = {
  to: string,
  subject: string,
  text: string,
  html: string
}
export interface NodemailerSericeType<T = Object> {
  sendMail(mailObj: mailObject): Promise<T>;
}

export class NodemailerService {
  private transporter: any
  constructor(
    @inject(NodemailerBindings.EMAIL_STAG) private emailStag: string,
    @inject(NodemailerBindings.PASS_STAG) private passStag: string,
    @inject(NodemailerBindings.EMAIL_PROD) private emailProd: string,
    @inject(NodemailerBindings.PASS_PROD) private passProd: string,
  ) {
    if (process.env.NODE_ENV == 'production') {
      if (!this.emailProd || !this.passProd) throw new HttpErrors.InternalServerError('Nodemailer Production Credentials not configured.');
    } else {
      if (!this.emailStag || !this.passStag) throw new HttpErrors.InternalServerError('Nodemailer Staging Credentials not configured.');
    }

    this.transporter = nodemailer.createTransport({
      "host": "smtp.gmail.com", "secure": true, "port": 465,
      "tls": {"rejectUnauthorized": false},
      "auth": {
        "user": process.env.NODE_ENV == 'production' ? this.emailProd : this.emailStag,
        "pass": process.env.NODE_ENV == 'production' ? this.passProd : this.passStag
      }
    });
  }

  sendMail(mailObj: object): Promise<object> {
    return this.transporter.sendMail(mailObj);
  }
}
