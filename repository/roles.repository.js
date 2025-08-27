class RoleRepository {
  constructor(pool) {
    this.pool = pool;
  }
  async createRole({ name }) {
    try {
      const [result] = await this.pool.query(
        "INSERT INTO Roles (name) VALUES (?)",
        [name]
      );
      return { id: result.insertId, name };
    } catch (err) {
      console.error(err);
      throw new Error("Error creating role");
    }
  }

  async getRoleByName(name) {
    try {
      const [rows] = await this.pool.query(
        "SELECT name FROM Roles where name=?",
        [name]
      );
      return rows[0] || null;
    } catch (err) {
      console.error(err);
      throw new Error("Error while retrieving Roles");
    }
  }

  async updateRoleById(id, name) {
    try {
      const [result] = await this.pool.query(
        "UPDATE Roles SET name=? WHERE id=?",
        [name, id]
      );
      return result;
    } catch (err) {
      console.error(err);
      throw new Error("Error updating privilege");
    }
  }

  async deleteRoleById(id) {
    try {
      const result = await this.pool.query("DELETE FROM Roles WHERE id=?", [
        id,
      ]);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error("Error deleting privilege");
    }
  }
}

export default RoleRepository;
