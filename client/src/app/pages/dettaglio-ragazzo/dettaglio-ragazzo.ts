import { Component, NgZone, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { ActivatedRoute } from '@angular/router';
import { Ragazzo } from '../../interfaces/ragazzo';
import { RagazziService } from '../../services/ragazzi.service';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-dettaglio-ragazzo',
  imports: [SharedModule, AvatarModule, AvatarGroupModule, ProgressSpinnerModule],
  templateUrl: './dettaglio-ragazzo.html',
  styles: ``,
})
export class DettaglioRagazzo implements OnInit {
  nomeRagazzo!: string;
  ragazzo!: Ragazzo;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    public ragazziService: RagazziService,
    private ngZone: NgZone,
  ) {}

  async ngOnInit() {
    this.nomeRagazzo = this.route.snapshot.paramMap.get('nome')!;
    this.ragazzo = await this.ragazziService.getRagazzoByNome(this.nomeRagazzo);
    console.log(this.ragazzo);
    await new Promise((r) => setTimeout(r, 300));
    this.ngZone.run(() => {
      this.ragazzo = this.ragazzo;
      this.loading = false;
    });
  }
}

// this.supaBaseService.getAll().then((res) => console.log(res.data));
// this.supaBaseService.add('Francesco Rossi').then((res) => console.log(res));
