import { Request, Response } from "express";

import { DeletePessoaUseCase } from "./DeletePessoaUseCase";

class DeletePessoaController {
  constructor(private deletePessoaUseCase: DeletePessoaUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    this.deletePessoaUseCase.execute(id);

    return response.send();
  }
}

export { DeletePessoaController };
