import { Injectable } from '@angular/core';
import { Ragazzo } from '../interfaces/ragazzo';
import { supabase } from './supabase.service';

@Injectable({
  providedIn: 'root',
})
export class RagazziService {
  async getAllRagazzi(): Promise<Ragazzo[]> {
    const { data, error } = await supabase.from('Ragazzi').select('*');
    console.log(data);

    if (error) throw error;
    return data ?? [];
  }

  getRagazzoByNome(nome: string) {
    return supabase.from('Ragazzi').select('*').eq('nome', nome);
  }
}
