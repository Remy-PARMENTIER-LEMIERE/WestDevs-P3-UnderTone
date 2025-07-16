import databaseClient from "../../../database/client";

import type { Result } from "../../../database/client";

class SignInRepository {
  async create(body: Omit<SignIn, "confirmPassword">) {
    console.log(body);
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (username, email, password, status, signup_date) VALUES (?, ?, ?, ?, DATE(NOW()))",
      [body.username, body.email, body.password, body.role],
    );

    return result.affectedRows;
  }

  async update(
    id: string,
    profile_picture: string | null,
    signup_date: Date | null,
  ) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE user SET profile_picture = ?, signup_date = ? WHERE id = ?",
      [profile_picture, signup_date, id],
    );

    return result.affectedRows > 0;
  }
}

export default new SignInRepository();
