import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";
import { compare } from "bcryptjs";
import {sign} from "jsonwebtoken";

interface IAuthenticateUserRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({email, password}: IAuthenticateUserRequest) {
        const userRepo = getCustomRepository(UserRepository);

        //verificar se email existe
        const user = await userRepo.findOne({ email });
        if (!user) {
            throw new Error("E-mail or password incorrect.");
        }

        //verificar se a senha esta correta
        const passwordMatch = await compare(password, user.password)
        if(!passwordMatch) {
            throw new Error("E-mail or password incorrect.");
        }

        //gerar token
        const token = sign({
            email: user.email
        }, 
        '3cfa43e3fade748f9ba0a05840619a22', 
        {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export {AuthenticateUserService}