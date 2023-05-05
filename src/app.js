import express from "express";
import "dotenv/config";

// permets d'établir la connexion à la base de donnée
import { pool } from "./config/database.js";

// on récupère la variable d'environnement
import { LOCAL_PORT } from "./config/const.js";

const PORT = process.env.PORT || LOCAL_PORT;

const app = express();

app
    .set("views", "./src/views")
    .set("view engine", "ejs");

app
    .use(express.static("public"))
    .use(express.urlencoded({ extended: true }));

// route pour vérifier la connexion de notre application (serveur)
app.get("/", (req, res) => {
    res.status(200).render("layout", {template : "home"});
});

// route api permettant de récupérer toutes les catégories
// on gère les requetes SQL avec une fonction asynchrone afin de mettre en "pause" 
//la dite requète tant qu'elle ne nous a pas retourné les données puisqu'on en a 
//besoin pour les traiter 

app.get("/categories", async (req, res) => {
    
    // le bloc try catch permets de gérer des instructions asynchrones
    // try -> test les instructions, si il y a une erreur ça passe dans le bloc catch
    try {
        const query = "SELECT id, title FROM category";
        
        const [result] = await pool.execute(query);
        res.json({
            data: result
        });
    } catch (error) {
        res.json({msg : error})
    }
});

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
