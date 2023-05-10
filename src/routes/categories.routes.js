import { Router } from "express";
import categoryView from "../controllers/components/category.js";

const categoryRouter = Router();

categoryRouter.get(`/categories/:id`, categoryView);

export default categoryRouter;