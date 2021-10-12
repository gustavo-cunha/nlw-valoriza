import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";
import { hash } from "bcryptjs";

interface IUserRequest {
    name: string;
    email: string;
    password: string;
    admin?: boolean;
}

class CreateUserService {

    async execute({ name, email, password, admin = false }: IUserRequest) {
        if (!email) {
            throw new Error("Invalid e-mail.");
        }

        const userRepo = getCustomRepository(UserRepository);

        const userAlreadyExists = await userRepo.findOne({ email });
        if (userAlreadyExists) {
            throw new Error("User already exists.");
        }

        const passwordHash = await hash(password, 8);

        const user = userRepo.create({
            name, 
            email, 
            password: passwordHash, 
            admin
        });
        await userRepo.save(user);

        return user;
    }
}

export { CreateUserService }