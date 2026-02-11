import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Nav } from './pages/common-components/nav/nav';
import { SupabaseService } from './services/supabase.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav],
  template: `
    <app-nav></app-nav>
    <div style="margin-top: 57px">
      <router-outlet />
    </div>
  `,
  styles: [],
})
export class App {
  supaServ = inject(SupabaseService);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}
}
