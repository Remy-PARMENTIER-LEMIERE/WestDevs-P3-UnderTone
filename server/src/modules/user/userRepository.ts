import databaseClient, {
  type Result,
  type Rows,
} from "../../../database/client";

class UserRepository {
  async findAll() {
    const [rows] = await databaseClient.query("SELECT * FROM user");
    return rows;
  }

  async findById(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE id = ?",
      [id],
    );
    return rows[0] || null;
  }

  async findByIdentifiant(identifiant: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE identifiant = ?",
      [identifiant],
    );
    return rows[0] || null;
  }

  async create(user: User) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (identifiant, password) VALUES (?, ?)",
      [user.identifiant, user.password],
    );
    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM user WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new UserRepository();
