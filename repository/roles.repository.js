import Role from "../models/roles.model.js";

class RoleRepository {
  async createRole({ name, privileges }) {
    try {
      const newRole = new Role({ name, privileges });
      await newRole.save();
      return newRole;
    } catch (err) {
      throw new Error("Error creating role" + err.message);
    }
  }

  async getRoleById(id) {
    try {
      const role = await Role.findById(id).populate("privileges");
      console.log(role);
      return role;
    } catch (err) {
      console.error(err);
      throw new Error("Error while retrieving role", err);
    }
  }

  async updateRoleById(id, update) {
    try {
      return await Role.findByIdAndUpdate(
        id,
        { $set: update },
        { new: true }
      ).populate("privileges");
    } catch (err) {
      throw new Error("Error updating role", err);
    }
  }

  async deleteRoleById(id) {
    try {
      return await Role.findByIdAndDelete(id);
    } catch (err) {
      throw new Error("Error deleting role", err);
    }
  }
}

export default new RoleRepository();
