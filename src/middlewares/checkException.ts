import { NextFunction, Request, Response } from "express";

export function checkException(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof Error) {
        return res.status(400).json({
            error: 1,
            msg: err.message
        });
    }

    return res.status(500).json({
        error: 1,
        msg: "Internal Server Error"
    });
}
