class PrivilegeRepository {
  constructor(pool) {
    this.pool = pool;
  }

  async createPrivilege({ name }) {
    try {
      const [result] = await this.pool.query(
        "INSERT INTO Privileges (name) VALUES (?)",
        [name]
      );
      return { id: result.insertId, name };
    } catch (err) {
      console.error(err);
      throw new Error("Error creating privilege");
    }
  }

  async getPrivileges() {
    try {
      const [rows] = await this.pool.query("SELECT * FROM Privileges");
      return rows;
    } catch (err) {
      console.error(err);
      throw new Error("Error while retrieving privileges");
    }
  }

  async getPrivilegeByName(name) {
    const [rows] = await this.pool.query(
      "SELECT name FROM Privileges WHERE name=?",
      [name]
    );
    return rows[0] || null;
  }

  async updatePrivilegeById(id, name) {
    try {
      const result = await this.pool.query(
        "UPDATE Privileges SET name=? WHERE id=?",
        [name, id]
      );
      return result;
    } catch (err) {
      console.error(err);
      throw new Error("Error updating privilege");
    }
  }

  async deletePrivilegeById(id) {
    try {
      const result = await this.pool.query(
        "DELETE FROM Privileges WHERE id=?",
        [id]
      );
      return result;
    } catch (err) {
      console.error(err);
      throw new Error("Error deleting privilege");
    }
  }
}

export default PrivilegeRepository;
