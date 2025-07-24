import RoleRepository from "../repository/roles.repository.js";

class RoleService {
  constructor(roleRepository) {
    this.roleRepository = roleRepository;
  }

  async createRole({ name, idsPrivilege }) {
    try {
      return await this.roleRepository.createRole({
        name,
        privileges: idsPrivilege,
      });
    } catch (err) {
      console.error(err);
      throw new Error(err.message);
    }
  }

  async getRoleById(id) {
    try {
      return await this.roleRepository.getRoleById(id);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async updateRoleById(id, { name, idsPrivilege }) {
    try {
      return await this.roleRepository.updateRoleById(id, {
        name,
        idsPrivilege,
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async deleteRoleById(id) {
    try {
      return await this.roleRepository.deleteRoleById(id);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new RoleService(RoleRepository);
