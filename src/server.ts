import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "reflect-metadata";
import "./database";
import { router } from "./routes";

const app = express();
app.use(express.json())
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
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
});

//http://localhost:3000
app.listen(3000, () => {
    console.log('Server is running.');
});
