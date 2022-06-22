import { PessoaRepository } from "../../repositories/PessoaRepository";
import { UpdatePessoaController } from "./UpdatePessoaController";
import { UpdatePessoaUseCase } from "./UpdatePessoaUseCase";

const pessoaRepository = PessoaRepository.getInstance();
const updatePessoaUseCase = new UpdatePessoaUseCase(pessoaRepository);
const updatePessoaController = new UpdatePessoaController(
  updatePessoaUseCase
);

export { updatePessoaController };
