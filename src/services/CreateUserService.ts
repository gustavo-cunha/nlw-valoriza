import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {

    async execute({ name, email, admin }: IUserRequest) {
        if (!email) {
            throw new Error("Invalid e-mail.");
        }

        const userRepo = getCustomRepository(UserRepository);

        const userAlreadyExists = await userRepo.findOne({ email });
        if (userAlreadyExists) {
            throw new Error("User already exists.");
        }

        const user = userRepo.create({
            name, email, admin
        });
        await userRepo.save(user);

        return user;
    }
}

export { CreateUserService }