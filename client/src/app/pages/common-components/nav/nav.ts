import { Component, OnInit } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { SharedModule } from '../../../../shared.module';
import { ThemeService } from '../../../services/theme.service';
import { SupabaseService } from '../../../services/supabase.service';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
  selector: 'app-nav',
  imports: [SharedModule, DrawerModule, AvatarModule, AvatarGroupModule, OverlayBadgeModule],
  templateUrl: './nav.html',
  styles: ``,
})
export class Nav {
  constructor(
    public themeService: ThemeService,
    public supabaseService: SupabaseService,
  ) {}

  toggleTheme() {
    this.themeService.toggle();
  }
}
