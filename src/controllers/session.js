import { pool } from "../config/database.js";

const sessionView = async (req,res) => {
    
    res.status(200).render("layout", {template : "sessionUser"});
}

export default sessionView;