import type { RequestHandler } from "express";

const userValidation: RequestHandler = (req, res, next) => {
  const { identifier, password } = req.body;

  if (!identifier || !password) {
    res.status(400).json({ message: "Missing identifiant or password" });
    return;
  }

  next();
};

export default { userValidation };
