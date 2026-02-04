import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Indovinello1 } from './pages/indovinello1/indovinello1';
import { Indovinello2 } from './pages/indovinello2/indovinello2';
import { Indovinello3 } from './pages/indovinello3/indovinello3';
import { Ppu } from './pages/ppu/ppu';
import { NotFound } from './pages/not-found/not-found';
import { DettaglioRagazzo } from './pages/dettaglio-ragazzo/dettaglio-ragazzo';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full',
  },
  {
    path: 'indovinello1',
    component: Indovinello1,
  },
  {
    path: '1234',
    component: Indovinello2,
  },
  {
    path: 'aaaaaa',
    component: Indovinello3,
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
    path: '**',
    component: NotFound,
  },
];
