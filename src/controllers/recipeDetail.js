import { pool } from "../config/database.js";

const recipeDetailView = async (req, res) => {
    
    try {

        const recipeQuery = `SELECT article.id, user.alias, article.title, article.content, 
        article.date, picture.title AS pictureTitle, picture.url 
        FROM article 
        JOIN picture ON picture.article_id = article.id 
        JOIN articles_users ON article.id = articles_users.article_id 
        JOIN user ON user.id = articles_users.user_id
        WHERE article.id = ? `;

        const categoryQuery = `SELECT category.title FROM category ORDER BY category.title ASC`;

        const commentQyery = `SELECT article.id,  user.alias, comment.message, comment.date
                                FROM comment 
                                JOIN user ON comment.user_id = user.id 
                                JOIN article ON comment.article_id = article.id
                                ORDER BY comment.date DESC`;

        const [recipeResult] = await pool.execute(recipeQuery, [req.params.id]);
        const [categoryResult] = await pool.execute(categoryQuery);
        const [commentResult] = await pool.execute(commentQyery);

        res.status(200).render("layout", { template: "recipeDetail", recipe: recipeResult[0], categories: categoryResult, comments : commentResult });


    } catch (error) {

        console.log("Aucun affichage de la page : ---> ", error);
    }
};

export default recipeDetailView;