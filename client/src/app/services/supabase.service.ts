import { Injectable, signal } from '@angular/core';
import { createClient, UserMetadata } from '@supabase/supabase-js';
import { User } from '../interfaces/user';

export const supabase = createClient(
  'https://vpxazjyqghrpdcsohipw.supabase.co',
  'sb_publishable_4s-eNgdBG8-bkhJuGDo2oA_CXv_8Yis',
);

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  isLoggedIn = signal(false);
  private _user = signal<User | undefined>(undefined);

  user = this._user.asReadonly();

  loginWithGoogle() {
    return supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  }

  constructor() {
    this.init();
    this.loadUser();

    supabase.auth.onAuthStateChange(() => {
      this.loadUser();
    });
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

  private async loadUser(): Promise<void> {
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
      this._user.set(undefined);
      this.isLoggedIn.set(false);
      return;
    }

    const meta: UserMetadata = data.user.user_metadata;

    this._user.set({
      avatar_url: meta['avatar_url'],
      email: meta['email'] ?? '',
      email_verified: meta['email_verified'],
      full_name: meta['full_name'],
      name: meta['name'],
      phone_verified: meta['phone_confirmed_at'],
      picture: meta['picture'],
    });

    this.isLoggedIn.set(true);
  }
}
