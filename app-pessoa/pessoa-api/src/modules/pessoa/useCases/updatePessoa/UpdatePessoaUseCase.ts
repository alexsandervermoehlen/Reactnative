import { PessoaRepository } from "../../repositories/PessoaRepository";

interface IRequest {
  nome: string;
  telefone: string;
  email: string;
  endereco: string;
  numero: number;
  bairro: string;
}

class UpdatePessoaUseCase {
  constructor(private pessoasRepository: PessoaRepository) {}

  execute(id: string, { nome, telefone, email, endereco, numero, bairro }: IRequest) {
    this.pessoasRepository.update(id, { nome, telefone, email, endereco, numero, bairro });
  }
}

export { UpdatePessoaUseCase };
