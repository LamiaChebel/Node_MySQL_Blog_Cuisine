import { pool } from "../../config/database.js";

const categoryView = async (req, res) => {
    
    try {
        const categoryQuery = `SELECT category.id, category.title, article.title AS recipeTitle,
                                articles_categories.article_id
                                FROM category
                                JOIN articles_categories ON articles_categories.category_id = category.id
                                 JOIN article ON article.id = articles_categories.article_id
                                 WHERE
                                category.id = ? ORDER BY category.title ASC`;

        const [result] = await pool.execute(categoryQuery,[req.params.id]);

        res.status(200).render("layout", { template: "category", recipesCategory: result });
        console.log(result);

    } catch (error) {

        console.log("Aucun affichage de la partie Catégorie : ---> ", error);
    }
};

export default categoryView;