import type { RequestHandler } from "express";
import userActions from "../modules/user/userActions";

class AuthController {
  login: RequestHandler = async (req, res) => {
    const { identifiant, password } = req.body;

    try {
      const { token } = await userActions.login(identifiant, password);
      res.json({ message: "Login successful", token });
    } catch (err) {
      if (err instanceof Error) {
        switch (err.message) {
          case "USER_NOT_FOUND":
            res.status(401).json({ message: "User not found" });
            break;
          case "INVALID_PASSWORD":
            res.status(401).json({ message: "Incorrect password" });
            break;
          default:
            res.status(500).json({ message: "Internal server error" });
        }
      }
    }
  };
}

export default new AuthController();
