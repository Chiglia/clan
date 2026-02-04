import { Injectable } from '@angular/core';
import { Ragazzo } from '../interfaces/ragazzo';
import { supabase } from './supabase.service';

@Injectable({
  providedIn: 'root',
})
export class RagazziService {
  async getAllRagazzi(): Promise<Ragazzo[]> {
    const { data, error } = await supabase.from('Ragazzi').select('*');
    if (error) throw error;
    return data ?? [];
  }

  async getRagazzoByNome(nome: string): Promise<Ragazzo> {
    const { data, error } = await supabase.from('Ragazzi').select('*').eq('nome', nome);
    if (error) throw error;
    return data?.[0] ?? null;
  }
}
