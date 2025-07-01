import express from "express";
import auth from "./Utils/auth";
import userValidation from "./Utils/validation";
import artistActions from "./modules/artist/artistActions";
import itemActions from "./modules/item/itemActions";

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
