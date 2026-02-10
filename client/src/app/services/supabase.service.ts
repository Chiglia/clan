import { Injectable, signal } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://vpxazjyqghrpdcsohipw.supabase.co',
  'sb_publishable_4s-eNgdBG8-bkhJuGDo2oA_CXv_8Yis',
);

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  isLoggedIn = signal(false);

  loginWithGoogle() {
    return supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  }

  constructor() {
    this.init();
  }

  async init() {
    const { data } = await supabase.auth.getSession();
    this.isLoggedIn.set(!!data.session);
  }

  async logout() {
    await supabase.auth.signOut();
    window.location.reload();
  }

  getSession() {
    return supabase.auth.getSession();
  }
}
