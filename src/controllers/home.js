import { pool } from "../config/database.js";
import getRandomInteger from "../utils/utils.js";

const homeView = async (req, res) => {
    try {
        const query = `SELECT article.title, article.content, picture.title AS pictureTitle, 
                picture.url FROM article JOIN picture ON picture.article_id = article.id 
                ORDER BY article.title ASC `;

        const [result] = await pool.execute(query);

        res.status(200).render("layout", { template: "home", article: result[getRandomInteger(0, result.length - 1)] });

    } catch (error) {
        console.log("Aucun affichage de la page : ---> ", error);
    }

};

export default homeView;