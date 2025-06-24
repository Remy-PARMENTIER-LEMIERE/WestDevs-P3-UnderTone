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
  async create(data: Omit<SignIn, "confirmPassword">) {
    const [result] = await databaseClient.query<Result>(
      "insert into user (username, email, password, identifier) values (?, ?, ?, ?)",
      [data.username, data.email, data.password, data.identifier],
    );

    return result.affectedRows;
  }
}

export default new SignInRepository();
