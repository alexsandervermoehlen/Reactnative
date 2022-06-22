import { Request, Response } from "express";

import { UpdatePessoaUseCase } from "./UpdatePessoaUseCase";

class UpdatePessoaController {
  constructor(private updatePessoaUseCase: UpdatePessoaUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    const { nome, telefone, email, endereco, numero, bairro } = request.body;

    this.updatePessoaUseCase.execute(id, { nome, telefone, email, endereco, numero, bairro });

    return response.send();
  }
}

export { UpdatePessoaController };
