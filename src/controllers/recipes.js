import { pool } from "../config/database.js";
import Query from "../model/index.js";

const recipesView = async (req, res) => {
    try {
        const query = `SELECT article.id, article.title, article.content, 
        article.date , picture.title AS pictureTitle, 
        picture.url FROM article 
        JOIN picture ON picture.article_id = article.id
        GROUP BY picture.article_id`;

        const result = await Query.find(query);

        const categoryQuery = `SELECT category.id , category.title FROM category ORDER BY category.title ASC`;

        const categoryResult = await Query.find(categoryQuery);

        res.status(200).render("layout", { template: "recipes", article: result , categories : categoryResult});
        
        return categoryResult;

    } catch (error) {
        console.log("Aucun affichage de la page recipes : ---> ", error);

    }
};

export default recipesView;