import { Component } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-carta-di-clan',
  imports: [],
  templateUrl: './carta-di-clan.html',
  styles: ``,
})
export class CartaDiClan {
  constructor(private supabaseService: SupabaseService) {}

  login() {
    this.supabaseService.loginWithGoogle();
  }
}
