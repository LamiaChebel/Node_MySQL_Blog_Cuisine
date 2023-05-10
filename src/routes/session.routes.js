import { Router } from "express";
import sessionView from "../controllers/session.js";

const sessionRouter = Router();

sessionRouter.get("/auth/sign", sessionView);

export default sessionRouter;