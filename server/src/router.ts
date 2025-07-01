import express from "express";

import itemActions from "./modules/item/itemActions";
import artistActions from "./modules/artist/artistActions";
import userValidation from "./Utils/validation";
import auth from "./Utils/auth";

const router = express.Router();

/* ************************************************************************* */
// Routes API
/* ************************************************************************* */

// Routes pour les items
router.get("/items", itemActions.browse);
router.get("/items/:id", itemActions.read);
router.post("/items", itemActions.add);

// Routes pour les artistes
router.get("/artist/:id", artistActions.read);

// Route de login (avec validation)
router.post("/login", userValidation.userValidation, auth.login);

/* ************************************************************************* */

export default router;
