import { PessoaRepository } from "../../repositories/PessoaRepository";
import { DeletePessoaController } from "./DeletePessoaController";
import { DeletePessoaUseCase } from "./DeletePessoaUseCase";

const pessoaRepository = PessoaRepository.getInstance();
const deletePessoaUseCase = new DeletePessoaUseCase(pessoaRepository);
const deletePessoaController = new DeletePessoaController(
  deletePessoaUseCase
);

export { deletePessoaController };
