import { Router } from "express";
import { pool } from "../config/database.js";

const commentsRouter = Router();

commentsRouter.post("/comments/post/:id", async (req,res)=>{
    try {
        const addUser = `INSERT INTO user (alias,mail,password,status_id)
                            VALUES (?,?,NULL,"") `;
        const comment = ` INSERT INTO comments (message,date,article_id,user_id)
                            VALUES(?,CURRENT_TIMESTAMP(),?,?)`;
                          //  SELECT user.id FROM user ORDER BY user.id DESC LIMIT 1
        const [result] = await pool.execute(addUser + comment, [req.params.id,req.body.alias,req.body.mail,req.body.message]);
        console.log(result,req.params.id);
        res.redirect(301,`/recipe/${req.params.id}`);                 
    } catch (error) {
        console.log(error);
    }
});

export default commentsRouter;