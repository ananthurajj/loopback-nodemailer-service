import {inject} from '@loopback/core';
import {get} from '@loopback/rest';
import {NodemailerBindings} from '../keys';
import {NodemailerSericeType} from '../services/nodemailer-service';

export class NodemailerController {
  constructor(
    @inject(NodemailerBindings.SEND_MAIL) public nodemailer: NodemailerSericeType,
  ) {}

  @get('/sent-a-test-mail')
  testNodemailer(): object {
    return this.nodemailer.sendMail({to: 'ananthu@hubspire.com', subject: 'Test Mail', text: '', html: `<h1>Test by ananthu</h1>`})
  }
}
