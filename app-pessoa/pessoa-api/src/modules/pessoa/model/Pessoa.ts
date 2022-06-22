import { v4 as uuidV4 } from "uuid";

class Pessoa {
  id?: string;
  nome: string;
  telefone: string;
  email: string;
  endereco: string;
  numero: number;
  bairro: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Pessoa };
