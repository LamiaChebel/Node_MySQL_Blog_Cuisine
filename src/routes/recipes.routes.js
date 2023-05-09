import { Router } from "express";
import recipesView from "../controllers/recipes.js";
import recipeDetailView from '../controllers/recipeDetail.js';

const recipesRouter = Router();

recipesRouter.get("/recipes", recipesView);
recipesRouter.get("/recipes/recipe/:id", recipeDetailView);

export default recipesRouter ;