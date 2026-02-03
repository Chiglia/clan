import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { SharedModule } from '../../../shared.module';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-indovinello1',
  imports: [InputTextModule, SharedModule],
  templateUrl: './indovinello1.html',
  styles: ``,
})
export class Indovinello1 {
  risposta1 = '';
  risposta2 = '';
  risposta3 = '';
  risposta4 = '';
  risposta5 = '';

  loading = false;
  showNextStep = false;

  constructor(private emailService: EmailService) {}

  submit(form: any) {
    if (!form.valid) return;

    this.loading = true;
    const risposta = [
      this.risposta1,
      this.risposta2,
      this.risposta3,
      this.risposta4,
      this.risposta5,
    ].join(' | ');

    console.log(risposta);
    this.send(risposta);
  }
  send(risposta: string) {
    this.emailService.send(risposta).then(
      () => {
        // loader minimo di 1 secondo
        setTimeout(() => {
          this.loading = false;
          this.showNextStep = true;
        }, 1000);
      },
      (err) => {
        this.loading = false;
        console.error(err);
        alert("Errore nell'invio della mail");
      },
    );
  }
}
