import { Request, Response } from "express";

import { ListPessoasUseCase } from "./ListPessoasUseCase";

class ListPessoasController {
  constructor(private listPessoasUseCase: ListPessoasUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listPessoasUseCase.execute();

    return response.json(all);
  }
}

export { ListPessoasController };
