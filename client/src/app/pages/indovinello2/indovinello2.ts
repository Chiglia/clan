import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { SharedModule } from '../../../shared.module';

@Component({
  selector: 'app-indovinello2',
  imports: [SharedModule],
  templateUrl: './indovinello2.html',
  styles: ``,
})
export class Indovinello2 implements OnInit {
  showNextStep = false;
  sbagliata = false;
  loading = false;
  loading2 = false;

  ngOnInit(): void {
    this.loading2 = false;
    setTimeout(() => {
      this.loading2 = true;
    }, 11000);
  }

  risposta(risposta: boolean) {
    this.loading = true;
    this.showNextStep = false;
    this.sbagliata = false;
    setTimeout(() => {
      if (risposta) {
        this.showNextStep = true;
      } else {
        this.sbagliata = true;
      }
      this.loading = false;
    }, 2000);
  }
}
