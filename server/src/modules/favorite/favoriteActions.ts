import type { Request, Response } from "express";
import db from "../../utils/db";

const isFavorite = async (req: Request, res: Response) => {
  const { type, userId, targetId } = req.params;

  let table = "";
  let column = "";

  if (type === "artist") {
    table = "favorite_artist";
    column = "artist_id";
  } else if (type === "concert_place") {
    table = "favorite_concert_place";
    column = "concert_place_id";
  } else {
    res.status(400).json({ error: "Type invalide" });
    return;
  }

  try {
    const [rows] = await db.query(
      `SELECT 1 FROM ${table} WHERE user_id = ? AND ${column} = ?`,
      [userId, targetId],
    );
    res.json({ isFavorite: (rows as unknown[]).length > 0 });
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

const addFavorite = async (req: Request, res: Response) => {
  const { userId, targetId } = req.body;
  const { type } = req.params;

  let table = "";
  let column = "";

  if (type === "artist") {
    table = "favorite_artist";
    column = "artist_id";
  } else if (type === "concert_place") {
    table = "favorite_concert_place";
    column = "concert_place_id";
  } else {
    res.status(400).json({ error: "Type invalide" });
    return;
  }

  try {
    await db.query(
      `INSERT IGNORE INTO ${table} (user_id, ${column}, date) VALUES (?, ?, CURDATE())`,
      [userId, targetId],
    );
    res.status(201).json({ message: "Ajouté aux favoris" });
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

const removeFavorite = async (req: Request, res: Response) => {
  const { userId, targetId } = req.body;
  const { type } = req.params;

  let table = "";
  let column = "";

  if (type === "artist") {
    table = "favorite_artist";
    column = "artist_id";
  } else if (type === "concert_place") {
    table = "favorite_concert_place";
    column = "concert_place_id";
  } else {
    res.status(400).json({ error: "Type invalide" });
    return;
  }

  try {
    await db.query(`DELETE FROM ${table} WHERE user_id = ? AND ${column} = ?`, [
      userId,
      targetId,
    ]);
    res.status(200).json({ message: "Retiré des favoris" });
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export default {
  isFavorite,
  addFavorite,
  removeFavorite,
};
