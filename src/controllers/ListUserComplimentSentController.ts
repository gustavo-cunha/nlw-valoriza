import { Request, Response } from "express";
import { ListUserComplimentSentService } from "../services/ListUserComplimentSentService";

class ListUserComplimentSentController {

    async handle(req: Request, res: Response) {
        const service = new ListUserComplimentSentService();
        const registros = await service.execute(req.user_id);
        return res.json(registros);
    }

}

export { ListUserComplimentSentController }
