import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared.module';

@Component({
  selector: 'app-indovinello3',
  imports: [SharedModule],
  templateUrl: './indovinello3.html',
  styles: ``,
})
export class Indovinello3 {
  loading = false;
  loading2 = false;
  showNextStep = false;

  certoh() {
    this.loading = true;
  }
  certoh2() {
    this.loading2 = true;
  }
}
