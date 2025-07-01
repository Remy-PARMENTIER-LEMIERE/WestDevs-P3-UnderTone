import type { RequestHandler } from "express";

class UserValidation {
  userValidation: RequestHandler = (req, res, next) => {
    const { identifiant, password } = req.body;

    if (!identifiant || !password) {
      res.status(400).json({ message: "Missing identifiant or password" });
      return;
    }

    next();
  };
}

export default new UserValidation();
