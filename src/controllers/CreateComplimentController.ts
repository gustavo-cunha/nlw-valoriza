import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController {

    async handle(req: Request, res: Response) {
        const { 
            user_sender, 
            user_receiver, 
            tag_id, 
            message
        } = req.body;

        const service = new CreateComplimentService();
        const compliment = await service.execute({ 
            user_sender, 
            user_receiver, 
            tag_id, 
            message
        });

        return res.json(compliment);
    }
}

export { CreateComplimentController }