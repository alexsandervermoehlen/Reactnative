import { Router } from "express";

import { pessoasRoutes } from "./pessoa.routes";

const router = Router();

router.use("/pessoa", pessoasRoutes);

export { router };
