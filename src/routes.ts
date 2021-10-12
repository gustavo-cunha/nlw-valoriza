import { Router } from "express";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserController } from "./controllers/ListUserController";
import { ListTagController } from "./controllers/ListTagController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ListUserComplimentSentController } from "./controllers/ListUserComplimentSentController";
import { ListUserComplimentReceivedController } from "./controllers/ListUserComplimentReceivedController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();
const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const listTagController = new ListTagController();
const createTagController = new CreateTagController();
const listUserComplimentSentController = new ListUserComplimentSentController();
const listUserComplimentReceivedController = new ListUserComplimentReceivedController();
const createComplimentController = new CreateComplimentController();
const authenticateUserController = new AuthenticateUserController();

router.get('/users', ensureAuthenticated, listUserController.handle);
router.post('/users', createUserController.handle);
router.get('/tags', ensureAuthenticated, listTagController.handle);
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get('/users/compliments/sent', ensureAuthenticated, listUserComplimentSentController.handle);
router.get('/users/compliments/received', ensureAuthenticated, listUserComplimentReceivedController.handle);
router.post('/compliments', ensureAuthenticated, createComplimentController.handle);
router.post('/login', authenticateUserController.handle);

export { router };
