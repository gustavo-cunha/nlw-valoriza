import { Request, Response } from "express";
import { ListTagService } from "../services/ListTagService";

class ListTagController {

    async handle(req: Request, res: Response) {
        const service = new ListTagService();
        const registros = await service.execute();
        return res.json(registros);
    }

}

export { ListTagController }
