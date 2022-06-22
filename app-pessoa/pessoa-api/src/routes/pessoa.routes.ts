import { Router } from "express";

import { createPessoaController } from "../modules/pessoa/useCases/createPessoa";
import { deletePessoaController } from "../modules/pessoa/useCases/deletePessoa";
import { listPessoasController } from "../modules/pessoa/useCases/listPessoas";
import { updatePessoaController } from "../modules/pessoa/useCases/updatePessoa";

const pessoasRoutes = Router();

pessoasRoutes.get("/", (request, response) => {
  return listPessoasController.handle(request, response);
});

pessoasRoutes.post("/", (request, response) => {
  return createPessoaController.handle(request, response);
});

pessoasRoutes.patch("/:id", (request, response) => {
  return updatePessoaController.handle(request, response);
});

pessoasRoutes.delete("/:id", (request, response) => {
  return deletePessoaController.handle(request, response);
});

export { pessoasRoutes };
