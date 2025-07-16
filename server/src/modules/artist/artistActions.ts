import type { RequestHandler } from "express";
import artistRepository from "./artistRepository";

const read: RequestHandler = async (req, res, next) => {
  try {
    const artistId = Number(req.params.id);
    const artist = await artistRepository.read(artistId);

    if (artist == null) {
      res.status(404).json("L'artiste n'existe pas sur la plateforme.");
    } else {
      res.json(artist);
    }
  } catch (err) {
    next(err);
  }
};

const artistSearch: RequestHandler = async (req, res, next) => {
  console.log("poulet");
  try {
    const artistName = String(req.query.name);
    const artistStyle = String(req.query.musicStyle);
    console.log(artistName, artistStyle);
    if (!artistName && !artistStyle) {
      res.status(400).json("veuillez remplir au moins un champ");
      return;
    }

    const result = await artistRepository.artistSearch(artistName, artistStyle);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export default { read, artistSearch };
