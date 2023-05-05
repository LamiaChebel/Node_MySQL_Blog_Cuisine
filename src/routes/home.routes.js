import { Router } from "express";
import homeView  from "../controllers/home.js";
const router = Router();

router.get("/", homeView);
export default router ;