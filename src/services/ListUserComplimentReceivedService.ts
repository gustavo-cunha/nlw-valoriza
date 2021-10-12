import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repository/ComplimentRepository"
import { classToPlain } from "class-transformer";

class ListUserComplimentReceivedService {

    async execute(user_id: string) {
        const complimentRepo = getCustomRepository(ComplimentRepository);
        const registros = await complimentRepo.find({
            where: {
                user_receiver: user_id
            }, 
            relations: ["userSender", "tag"]
        });
        return classToPlain(registros);
    }

}

export { ListUserComplimentReceivedService }
