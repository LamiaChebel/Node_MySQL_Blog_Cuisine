import {pool} from "../../config/database.js";

const commentsView = async (req,res)=>{
    try {
        const comment = ` INSERT INTO comment (post_author,message,date,article_id)
                            VALUES(?,?,NOW(),?)`;

        await pool.execute(comment, [req.body.post_author,req.body.message,req.params.id]);

        res.redirect(301,`/recipes/recipe/${req.params.id}`);
                  
    } catch (error) {
        console.log("Requête SQL rejetée :", error);
    }
};

export default commentsView;