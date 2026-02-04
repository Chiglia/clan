import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme = signal<'light' | 'dark'>('light');

  constructor() {
    effect(() => {
      document.documentElement.classList.toggle('my-app-dark', this.theme() === 'dark');
    });
  }

  toggle() {
    this.theme.update((t) => (t === 'light' ? 'dark' : 'light'));
  }

  set(theme: 'light' | 'dark') {
    this.theme.set(theme);
  }
}
