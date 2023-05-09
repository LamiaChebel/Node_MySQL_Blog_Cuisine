import { pool } from "../../config/database.js";

const categoryView = async (req, res) => {
    
    try {

      const categoryQuery = `SELECT category.title FROM category ORDER BY category.title ASC`;

        const [categoryResult] = await pool.execute(categoryQuery);
        console.log(Array.isArray(categoryResult));

        res.status(200).render("layout",{template: "asideCategory", categories: categoryResult});

    } catch (error) {

        console.log("Aucun affichage de la partie Catégorie : ---> ", error);
    }
};

export default categoryView;