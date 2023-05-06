import { Router } from "express";
import homeView  from "../controllers/home.js";
const homeRouter = Router();

homeRouter.get("/", homeView);
export default homeRouter ;