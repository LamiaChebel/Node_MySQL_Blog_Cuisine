// import { pool } from "../config/database.js";
import getRandomInteger from "../utils/utils.js";

import Query from "../model/index.js";

const homeView = async (req, res) => {
    try {
        const query = `SELECT article.id, article.title, article.content, 
        article.date , picture.title AS pictureTitle, 
        picture.url FROM article 
        JOIN picture ON picture.article_id = article.id
        GROUP BY picture.article_id `;

        const recipe = await Query.find(query);

        // const [result] = await pool.execute(query);

        res.status(200).render("layout", { template: "home", article: recipe[getRandomInteger(0, recipe.length - 1)] });

    } catch (error) {
        console.log("Aucun affichage de la page home : ---> ", error);
    }

};

export default homeView;