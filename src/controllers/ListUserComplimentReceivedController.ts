import { Request, Response } from "express";
import { ListUserComplimentReceivedService } from "../services/ListUserComplimentReceivedService";

class ListUserComplimentReceivedController {

    async handle(req: Request, res: Response) {
        const service = new ListUserComplimentReceivedService();
        const registros = await service.execute(req.user_id);
        return res.json(registros);
    }

}

export { ListUserComplimentReceivedController }
