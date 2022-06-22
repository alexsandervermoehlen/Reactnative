import { PessoaRepository } from "../../repositories/PessoaRepository";
import { CreatePessoaController } from "./CreatePessoaController";
import { CreatePessoaUseCase } from "./CreatePessoaUseCase";

const pessoaRepository = PessoaRepository.getInstance();
const createPessoaUseCase = new CreatePessoaUseCase(pessoaRepository);
const createPessoaController = new CreatePessoaController(
  createPessoaUseCase
);

export { createPessoaController };
