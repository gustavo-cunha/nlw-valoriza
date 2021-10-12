import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repository/ComplimentRepository";
import { UserRepository } from "../repository/UserRepository";

interface IComplimentRequest {
    user_sender: string;
    user_receiver: string;
    tag_id: string;
    message: string;
}

class CreateComplimentService {

    async execute({ 
        user_sender, 
        user_receiver, 
        tag_id, 
        message 
    }: IComplimentRequest) {
        const complimentRepo = getCustomRepository(ComplimentRepository);
        const userRepo = getCustomRepository(UserRepository);

        if (user_sender === user_receiver) {
            throw new Error("Incorrect user receiver.");
        }

        const userReceiverExists = await userRepo.findOne(user_receiver);
        if (!userReceiverExists) {
            throw new Error("User receiver does not exists.");
        }

        const compliment = complimentRepo.create({
            user_sender, 
            user_receiver, 
            tag_id, 
            message
        });
        await complimentRepo.save(compliment);

        return compliment;
    }
}

export { CreateComplimentService }
