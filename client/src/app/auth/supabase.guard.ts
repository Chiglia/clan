import { CanActivateFn, Router } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = async () => {
  const service = inject(SupabaseService);
  const router = inject(Router);

  if (!service.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
