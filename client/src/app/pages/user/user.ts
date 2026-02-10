import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { SupabaseService } from '../../services/supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [Button],
  templateUrl: './user.html',
  styles: ``,
})
export class User {
  constructor(
    public supabaseService: SupabaseService,
    private router: Router,
  ) {}

  logout() {
    this.supabaseService.logout();
    this.router.navigate(['/']);
  }
}
