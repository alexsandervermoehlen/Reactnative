import { PessoaRepository } from "../../repositories/PessoaRepository";

class DeletePessoaUseCase {
  constructor(private pessoasRepository: PessoaRepository) {}
  execute(id: string) {
    this.pessoasRepository.delete(id);
  }
}

export { DeletePessoaUseCase };
