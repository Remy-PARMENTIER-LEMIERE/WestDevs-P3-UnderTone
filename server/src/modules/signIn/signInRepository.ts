import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type SignIn = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  identifier: string;
};

class SignInRepository {
  async create(body: Omit<SignIn, "confirmPassword">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (username, email, password, identifier) VALUES (?, ?, ?, ?)",
      [body.username, body.email, body.password, body.identifier],
    );

    return result.affectedRows;
  }
}

export default new SignInRepository();
