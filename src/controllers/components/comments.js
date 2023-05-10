// import {pool} from "../../config/database.js";

import Query from "../../model/index.js";


const commentsView = async (req,res)=>{
    try {
        

        const comment = ` INSERT INTO comment (post_author,message,date,article_id)
                            VALUES(?,?,NOW(),?)`;

        const {post_author, message} = req.body;
        const {id} = req.params;
        const data = {post_author, message, id};

        await Query.write(comment, data);

        res.redirect(301,`/recipes/recipe/${id}`);
                  
    } catch (error) {
        console.log("Requête SQL rejetée :", error);
    }
};

export default commentsView;