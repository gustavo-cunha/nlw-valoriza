import { Request, Response } from "express";
import { ListUserService } from "../services/ListUserService";

class ListUserController {

    async handle(req: Request, res: Response) {
        const service = new ListUserService();
        const registros = await service.execute();
        return res.json(registros);
    }

}

export { ListUserController }
