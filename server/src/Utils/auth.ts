import argon2 from "argon2";
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import userRepository from "../modules/user/userRepository";

const login: RequestHandler = async (req, res) => {
  try {
    const user = await userRepository.findByIdentifiant(req.body.identifier);
    if (!user) throw new Error("USER_NOT_FOUND");

    const validPassword = await argon2.verify(user.password, req.body.password);
    if (!validPassword) throw new Error("INVALID_PASSWORD");
    const secretKey = process.env.APP_SECRET;

    if (!secretKey) {
      throw new Error("A secret must be provided");
    }
    const token = jwt.sign({ userId: user.id }, secretKey, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
    });

    res.status(200).json("Connection success");
  } catch (err) {
    res.sendStatus(500);
  }
};

export default { login };
