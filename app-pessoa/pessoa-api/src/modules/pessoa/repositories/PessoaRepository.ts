import { Pessoa } from "../model/Pessoa";

interface ICreatePessoaDTO {
  nome: string;
  telefone: string;
  email: string;
  endereco: string;
  numero: number;
  bairro: string;
}

interface IUpdatePessoaDTO {
  nome: string;
  telefone: string;
  email: string;
  endereco: string;
  numero: number;
  bairro: string;
}

class PessoaRepository {
  private pessoas: Pessoa[];

  private static INSTANCE: PessoaRepository;

  private constructor() {
    this.pessoas = [];
  }

  public static getInstance(): PessoaRepository {
    if (!PessoaRepository.INSTANCE) {
      PessoaRepository.INSTANCE = new PessoaRepository();
    }
    return PessoaRepository.INSTANCE;
  }

  list() {
    return this.pessoas;
  }

  create({ nome, telefone, email, endereco, numero, bairro }: ICreatePessoaDTO) {
    const pessoa = new Pessoa();

    Object.assign(pessoa, {
      nome,
      telefone,
      email,
      endereco,
      numero,
      bairro,
      created_at: new Date(),
    });

    this.pessoas.push(pessoa);
  }

  update(id: string, { nome, telefone, email, endereco, numero, bairro }: IUpdatePessoaDTO) {
    const pessoa = this.findById(id);

    if (pessoa) {
      const indice = this.pessoas.findIndex((p) => p.id === id);

      const pessoaUpdated: Pessoa = {
        ...pessoa,
        nome,
        telefone,
        email,
        endereco,
        numero,
        bairro,
      };

      this.pessoas[indice] = pessoaUpdated;
    }
  }

  delete(id: string) {
    const newList = this.pessoas.filter((p) => p.id !== id);

    this.pessoas = newList;
  }

  findById(id: string): Pessoa | undefined {
    const user = this.pessoas.find((u) => u.id === id);

    return user;
  }
}

export { PessoaRepository };
