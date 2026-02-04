import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Indovinello1 } from './pages/cacciaTesoro/indovinello1/indovinello1';
import { Indovinello2 } from './pages/cacciaTesoro/indovinello2/indovinello2';
import { Indovinello3 } from './pages/cacciaTesoro/indovinello3/indovinello3';
import { Ppu } from './pages/ppu/ppu';
import { NotFound } from './pages/not-found/not-found';
import { DettaglioRagazzo } from './pages/dettaglio-ragazzo/dettaglio-ragazzo';
import { Ruoli } from './pages/ruoli/ruoli';
import { Canzoniere } from './pages/canzoniere/canzoniere';
import { CartaDiClan } from './pages/carta-di-clan/carta-di-clan';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full',
  },
  {
    path: 'ppu',
    component: Ppu,
  },
  {
    path: 'dettaglioRagazzo/:nome',
    component: DettaglioRagazzo,
  },
  {
    path: 'ruoli',
    component: Ruoli,
  },
  {
    path: 'canzoniere',
    component: Canzoniere,
  },
  {
    path: 'cartaDiClan',
    component: CartaDiClan,
  },
  {
    path: '**',
    component: NotFound,
  },
];
