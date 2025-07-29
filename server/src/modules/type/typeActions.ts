import type { RequestHandler } from "express";
import typeRepository from "./typeRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const types = await typeRepository.readAll();

    if (types) {
      res.json(types);
    } else {
      res.json(204);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse };
