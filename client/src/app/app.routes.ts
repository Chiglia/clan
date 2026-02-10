import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Ppu } from './pages/ppu/ppu';
import { NotFound } from './pages/error/not-found/not-found';
import { DettaglioRagazzo } from './pages/dettaglio-ragazzo/dettaglio-ragazzo';
import { Ruoli } from './pages/ruoli/ruoli';
import { Canzoniere } from './pages/canzoniere/canzoniere';
import { CartaDiClan } from './pages/carta-di-clan/carta-di-clan';
import { Verbali } from './pages/verbali/verbali';
import { authGuard } from './auth/supabase.guard';
import { Login } from './pages/auth/login/login';
import { ToDo } from './pages/to-do/to-do';
import { AccessDenied } from './pages/error/access-denied/access-denied';
import { AccessDeniedGuard } from './auth/access-denied.guard';
import { User } from './pages/user/user';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AccessDeniedGuard],
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'ppu',
        canActivate: [authGuard],
        component: Ppu,
      },
      {
        path: 'dettaglioRagazzo/:nome',
        canActivate: [authGuard],
        component: DettaglioRagazzo,
      },
      {
        path: 'todo',
        canActivate: [authGuard],
        component: ToDo,
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
        path: 'verbali',
        component: Verbali,
      },
      {
        path: 'login',
        component: Login,
      },
      {
        path: 'user',
        canActivate: [authGuard],
        component: User,
      },
    ],
  },
  {
    path: 'access-denied',
    component: AccessDenied,
  },
  {
    path: '**',
    component: NotFound,
  },
];
