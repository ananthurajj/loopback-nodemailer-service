import {BindingKey} from '@loopback/core';
import {NodemailerService} from './services/nodemailer-service';

export namespace NodemailerBindings {
  export const SEND_MAIL = BindingKey.create<NodemailerService>('services.nodemailer.sendEmail');
  export const EMAIL_STAG = BindingKey.create<string>('services.nodemailer.emailStag');
  export const PASS_STAG = BindingKey.create<string>('services.nodemailer.passStag');
  export const EMAIL_PROD = BindingKey.create<string>('services.nodemailer.emailProd');
  export const PASS_PROD = BindingKey.create<string>('services.nodemailer.passProd');
}

export namespace NodemailerEmailCredentialsConstants {
  export const EMAIL_STAG_CONST = '';
  export const PASS_STAG_CONST = '';
  export const EMAIL_PROD_CONST = '';
  export const PASS_PROD_CONST = '';
}
