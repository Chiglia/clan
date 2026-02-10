export interface Ragazzo {
  id: number;
  nome: string;
  cognome: string;
  dataNascita: Date;
  codiceFiscale: string;
  telefono: string;
  email: string;
  indirizzo: string;
  citta: string;
  annoIngresso: number;
  note: string;
  genitore?: {
    nome: string;
    cognome: string;
    telefono: string;
    email: string;
  };
}
