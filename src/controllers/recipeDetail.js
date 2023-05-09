import { pool } from "../config/database.js";

const recipeDetailView = async (req, res) => {

    try {

        const recipeQuery = `SELECT article.id, user.alias, article.title, article.content, 
                            article.date
                            FROM article       
                            JOIN articles_users ON article.id = articles_users.article_id 
                            JOIN user ON user.id = articles_users.user_id
                            WHERE article.id = ?`;

        const imageQuery = `SELECT picture.title, picture.url, picture.article_id FROM picture
                            WHERE picture.article_id = ?`;

        const categoryQuery = `SELECT category.title FROM category ORDER BY category.title ASC`;

        const commentQuery = `SELECT comment.post_author, comment.message, comment.date, comment.article_id
                                FROM comment WHERE comment.article_id = ?
                                ORDER BY comment.date DESC`;

        const [recipeResult] = await pool.execute(recipeQuery, [req.params.id]);

        const [imageResult] = await pool.execute(imageQuery, [req.params.id]);

        const [categoryResult] = await pool.execute(categoryQuery);
        const [commentResult] = await pool.execute(commentQuery, [req.params.id]);

        res.status(200).render("layout", { template: "recipeDetail", recipe: recipeResult[0], images: imageResult, categories: categoryResult, comments: commentResult });


    } catch (error) {

        console.log("Aucun affichage de la page recipeDetail : ---> ", error);
    }
};

export default recipeDetailView;