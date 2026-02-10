import { Component } from '@angular/core';
import { SupabaseService } from '../../../services/supabase.service';
import { SharedModule } from '../../../../shared.module';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login',
  imports: [SharedModule, DividerModule, CardModule],
  templateUrl: './login.html',
  styles: ``,
})
export class Login {
  constructor(private supabase: SupabaseService) {}

  login() {
    this.supabase.loginWithGoogle();
  }
}
