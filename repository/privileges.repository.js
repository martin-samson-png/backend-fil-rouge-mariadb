import Privilege from "../models/privilege.model.js";

class PrivilegeRepository {
  async createPrivilege({ name }) {
    try {
      const newPrivilege = new Privilege({ name });
      await newPrivilege.save();
      return newPrivilege;
    } catch (err) {
      throw new Error("Error creating privilege", err);
    }
  }

  async getPrivileges() {
    try {
      return await Privilege.find();
    } catch (err) {
      throw new Error("Error while retrieving privileges", err);
    }
  }

  async getPrivilegeById(id) {
    try {
      return await Privilege.findById(id);
    } catch (err) {
      throw new Error("Error while retrieving this privilege", err);
    }
  }

  async updatePrivilegeById(id, update) {
    try {
      return await Privilege.findByIdAndUpdate(
        id,
        { $set: update },
        { new: true }
      );
    } catch (err) {
      throw new Error("Error updating privilege", err);
    }
  }
  async deletePrivilegeById(id) {
    try {
      return await Privilege.findByIdAndDelete(id);
    } catch (err) {
      throw new Error("Error deleting privilege", err);
    }
  }
}

export default new PrivilegeRepository();
