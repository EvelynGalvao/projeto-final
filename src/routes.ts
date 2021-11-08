import { Router } from "express";

import CadastroController from "./controllers/CadastroController";

const routes = Router();


routes.post('/cadastros', CadastroController.create);


export default routes;