import { Component, NgZone, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { Ragazzo } from '../../interfaces/ragazzo';
import { RagazziService } from '../../services/ragazzi.service';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-ppu',
  imports: [SharedModule, SkeletonModule],
  templateUrl: './ppu.html',
  styles: ``,
})
export class Ppu implements OnInit {
  ragazzi: Ragazzo[] = [];
  loading = true;

  constructor(
    public ragazziService: RagazziService,
    private ngZone: NgZone,
  ) {}

  async ngOnInit() {
    const data = await this.ragazziService.getAllRagazzi();
    await new Promise((r) => setTimeout(r, 300));
    this.ngZone.run(() => {
      this.ragazzi = data;
      this.loading = false;
    });
  }
}
