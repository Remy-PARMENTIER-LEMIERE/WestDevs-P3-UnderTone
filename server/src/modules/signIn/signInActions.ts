import type { RequestHandler } from "express";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newUser = {
      name: req.body.title,
      email: req.body.user_id,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    };

    const insertNewUser = await signInRepository.create(newUser);

    res.status(201).json({ insertNewUser });
  } catch (err) {
    next(err);
  }
};

export default { add };
