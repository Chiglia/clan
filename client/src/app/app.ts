import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './pages/common-components/nav/nav';

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
export class App {}
