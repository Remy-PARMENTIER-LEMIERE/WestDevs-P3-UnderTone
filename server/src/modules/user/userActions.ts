import userRepository from "./userRepository";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

class UserActions {
  async login(identifiant: string, password: string) {
    const user = await userRepository.findByIdentifiant(identifiant);
    if (!user) throw new Error("USER_NOT_FOUND");

    const validPassword = await argon2.verify(user.password, password);
    if (!validPassword) throw new Error("INVALID_PASSWORD");

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1h" },
    );

    return { token };
  }
}

export default new UserActions();
