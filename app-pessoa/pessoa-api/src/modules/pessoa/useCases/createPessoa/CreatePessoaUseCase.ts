import { PessoaRepository } from "../../repositories/PessoaRepository";

interface IRequest {
  nome: string;
  telefone: string;
  email: string;
  endereco: string;
  numero: number;
  bairro: string;
}

class CreatePessoaUseCase {
  constructor(private pessoasRepository: PessoaRepository) {}
  execute({ nome, telefone, email, endereco, numero, bairro }: IRequest) {
    this.pessoasRepository.create({ nome, telefone, email, endereco, numero, bairro });
  }
}

export { CreatePessoaUseCase };
