import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { ActivatedRoute, Router } from '@angular/router';
import { Ragazzo } from '../../interfaces/ragazzo';
import { RagazziService } from '../../services/ragazzi.service';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-dettaglio-ragazzo',
  imports: [SharedModule],
  templateUrl: './dettaglio-ragazzo.html',
  styles: ``,
})
export class DettaglioRagazzo implements OnInit {
  nomeRagazzo!: string;
  ragazzo!: Ragazzo;

  constructor(
    private route: ActivatedRoute,
    public ragazziService: RagazziService,
    public supaBaseService: SupabaseService,
  ) {}

  async ngOnInit() {
    this.nomeRagazzo = this.route.snapshot.paramMap.get('nome')!;
    this.ragazziService.getRagazzoByNome(this.nomeRagazzo);
    // this.supaBaseService.getAll().then((res) => console.log(res.data));
    // this.supaBaseService.add('Francesco Rossi').then((res) => console.log(res));
  }
}
