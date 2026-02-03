import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';
import { environment } from '../../environments/environment.local';

@Injectable({ providedIn: 'root' })
export class EmailService {
  send(message: string) {
    return emailjs.send(
      environment.emailjsServiceId,
      environment.emailjsTemplateId,
      {
        message,
        to_email: 'wasdquerty123@gmail.com',
      },
      environment.emailjsPublicKey,
    );
  }
}
