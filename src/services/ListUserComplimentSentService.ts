import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repository/ComplimentRepository"
import { classToPlain } from "class-transformer";

class ListUserComplimentSentService {

    async execute(user_id: string) {
        const complimentRepo = getCustomRepository(ComplimentRepository);
        const registros = await complimentRepo.find({
            where: {
                user_sender: user_id
            }, 
            relations: ["userReceiver", "tag"]
        });
        return classToPlain(registros);
    }

}

export { ListUserComplimentSentService }
