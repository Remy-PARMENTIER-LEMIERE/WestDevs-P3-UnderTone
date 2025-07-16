/*import UserRepository from "./userRepository";
import type { RequestHandler } from "express";

const add: RequestHandler = async (req, res) => {
  const { username, birthdate, profile_picture, email, password, status } =
    req.body;

  if (!username || !birthdate || !email || !password || !status) {
    return res.status(400).json({ error: "Champs obligatoires manquants" });
  }

  try {
    const signup_date = new Date();

    const result = await UserRepository.create({
      username,
      birthdate,
      profile_picture,
      email,
      password,
      status,
      signup_date,
      id: 0,
    });

    if (result === 1) {
      return res.status(201).json({ message: "Inscription réussie" });
    }
    return res.status(500).json({ error: "Erreur lors de l'inscription" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erreur serveur" });
  }
};

export default { add };*/
