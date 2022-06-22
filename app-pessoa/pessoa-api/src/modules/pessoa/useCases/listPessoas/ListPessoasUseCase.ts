import { Pessoa } from "../../model/Pessoa";
import { PessoaRepository } from "../../repositories/PessoaRepository";

class ListPessoasUseCase {
  constructor(private pessoasRepository: PessoaRepository) {}
  execute(): Pessoa[] {
    const pessoas = this.pessoasRepository.list();

    return pessoas;
  }
}

export { ListPessoasUseCase };
