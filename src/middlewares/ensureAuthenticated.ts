import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface ITokenPayload {
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    //verificae se token existe
    if(!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        //verificar se token é valido
        const { sub } = verify(token, "3cfa43e3fade748f9ba0a05840619a22") as ITokenPayload;

        //recuperar info do usuario
        req.user_id = sub;

        return next();
    } catch (error) {
        return res.status(401).end();
    }

}