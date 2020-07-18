import {Binding, Component} from '@loopback/core';
import {NodemailerBindings, NodemailerEmailCredentialsConstants} from './keys';
import {NodemailerService} from './services/nodemailer-service';

export class NodemailerComponent implements Component {
  bindings: Binding[] = [
    Binding.bind(NodemailerBindings.EMAIL_STAG).to(NodemailerEmailCredentialsConstants.EMAIL_STAG_CONST),
    Binding.bind(NodemailerBindings.PASS_STAG).to(NodemailerEmailCredentialsConstants.PASS_STAG_CONST),
    Binding.bind(NodemailerBindings.EMAIL_PROD).to(NodemailerEmailCredentialsConstants.EMAIL_PROD_CONST),
    Binding.bind(NodemailerBindings.PASS_PROD).to(NodemailerEmailCredentialsConstants.PASS_PROD_CONST),
    Binding.bind(NodemailerBindings.SEND_MAIL).toClass(NodemailerService)
  ];
}
