import type { Rows } from "../../../database/client";
import databaseClient from "../../../database/client";

class TypeRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT id, name FROM type",
    );

    return rows as Types[];
  }
}

export default new TypeRepository();
