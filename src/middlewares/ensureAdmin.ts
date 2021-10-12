import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository"

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    const {user_id} = req;
    
    const userRepo = getCustomRepository(UserRepository);
    const user = await userRepo.findOne(user_id);

    if (!user || !user.admin) {
        return res.status(401).json({
            error: 1,
            msg: 'Unauthorized'
        });
    }

    return next();
}