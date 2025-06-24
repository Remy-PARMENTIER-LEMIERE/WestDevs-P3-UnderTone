import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type SignIn = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

class SignInRepository {
  async create(item: Omit<SignIn, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into user (name, email, password, confirmPassword) values (?, ?, ?, ?)",
      [item.name, item.email, item.password, item.confirmPassword],
    );

    return result.affectedRows;
  }
}

export default new SignInRepository();
