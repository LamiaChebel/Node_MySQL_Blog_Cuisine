import express from "express";
import "dotenv/config";

import {LOCAL_PORT} from "./config/const.js";
import homeRouter from "./routes/home.routes.js";
import recipesRouter from "./routes/recipes.routes.js";
import commentsRouter from "./routes/commentsRouter.js";


const PORT = LOCAL_PORT || process.env.PORT;

const app = express();

app
    .set("views", "./views")
    .set("view engine", "ejs");

app
    .use(express.static("../public"))
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(homeRouter)
    .use(recipesRouter)
    .use(commentsRouter);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));