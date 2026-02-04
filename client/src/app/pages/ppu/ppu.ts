import { Component, OnInit } from '@angular/core';
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

  constructor(public ragazziService: RagazziService) {}

  async ngOnInit() {
    this.loading = true;
    this.ragazzi = await this.ragazziService.getAllRagazzi();
    await new Promise((r) => setTimeout(r, 200));
    this.loading = false;
    console.log(this.ragazzi);
  }
}
