import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { SharedModule } from '../../../../shared.module';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-nav',
  imports: [SharedModule, DrawerModule],
  templateUrl: './nav.html',
  styles: ``,
})
export class Nav {
  menuItems = [
    { label: 'Iniziative', link: '/iniziative' },
    { label: 'Bollettino', link: '/bollettino' },
    { label: 'Contatti', link: '/contatti' },
    { label: 'Prenotazione sale', link: '/sale' },
  ];

  menuVisible = false;

  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggle();
  }
}
