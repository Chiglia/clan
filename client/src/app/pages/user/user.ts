import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { SupabaseService } from '../../services/supabase.service';
import { Router } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from '../../../shared.module';

@Component({
  selector: 'app-user',
  imports: [SharedModule, AvatarModule],
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
