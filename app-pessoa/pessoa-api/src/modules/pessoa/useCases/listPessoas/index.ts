import { PessoaRepository } from "../../repositories/PessoaRepository";
import { ListPessoasController } from "./ListPessoasController";
import { ListPessoasUseCase } from "./ListPessoasUseCase";

const pessoaRepository = PessoaRepository.getInstance();
const listPessoasUseCase = new ListPessoasUseCase(pessoaRepository);
const listPessoasController = new ListPessoasController(listPessoasUseCase);

export { listPessoasController };
