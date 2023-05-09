import { Router } from "express";
import categoryView from "../controllers/components/category";

const categoryRouter = Router();

categoryRouter.get("/categories/category/:id", categoryView);