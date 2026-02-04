import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { Ragazzo } from '../interfaces/ragazzo';

export const supabase = createClient(
  'https://vpxazjyqghrpdcsohipw.supabase.co',
  'sb_publishable_4s-eNgdBG8-bkhJuGDo2oA_CXv_8Yis',
);

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  add(nome: string) {
    return supabase.from('Ragazzi').insert({ nome });
  }
}
