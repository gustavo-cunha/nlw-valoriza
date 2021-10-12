import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "reflect-metadata";
import "./database";
import { router } from "./routes";
import { checkException } from "./middlewares/checkException";

const app = express();
app.use(express.json())
app.use(router);
app.use(checkException);

//http://localhost:3000
app.listen(3000, () => {
    console.log('Server is running.');
});
