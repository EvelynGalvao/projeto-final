import { Request } from "express";

export default {

    async create(req: Request, res: Response){
        const {nome, cpf} = req.body;
        const id=3;
        const data = {id,nome,cpf};
        return res.status(201).json({data:data});
    }
}