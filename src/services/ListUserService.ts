import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository"
import { classToPlain } from "class-transformer";

class ListUserService {

    async execute() {
        const userRepo = getCustomRepository(UserRepository);
        const registros = await userRepo.find();
        return classToPlain(registros);
    }

}

export { ListUserService }
