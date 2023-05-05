import { pool } from "../config/database.js";

const recipeDetailView = async (req, res) => {
            const query = "SELECT article.id, article.title, article.content, article.date , picture.title AS pictureTitle, picture.url FROM article JOIN picture ON picture.article_id = article.id;";
            // const query_user = "";
            const [result] = await pool.execute(query);

            res.status(200).render("layout", {template : "recipeDetail", article : result});
            console.log(result);
};      

export default recipeDetailView;