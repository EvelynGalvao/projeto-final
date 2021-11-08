import { Router } from "express";

const routes = Router();

routes.post('/cadastros', CadastroController.create);


export default routes;