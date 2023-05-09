import { Router } from "express";

import commentsView from "../controllers/components/comments.js";

const commentsRouter = Router();

commentsRouter.post("/comments/post/:id", commentsView);

export default commentsRouter;