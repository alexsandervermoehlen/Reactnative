import { Request, Response } from "express";

import { CreatePessoaUseCase } from "./CreatePessoaUseCase";

class CreatePessoaController {
  constructor(private createPessoaUseCase: CreatePessoaUseCase) {}

  handle(request: Request, response: Response): Response {
    const { nome, telefone, email, endereco, numero, bairro } = request.body;

    this.createPessoaUseCase.execute({ nome, telefone, email, endereco, numero, bairro });

    return response.status(201).send();
  }
}

export { CreatePessoaController };
