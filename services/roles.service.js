class RoleService {
  constructor(roleRepository) {
    this.roleRepository = roleRepository;
  }

  async createRole({ name }) {
    if (!name || Object.keys(name).length === 0) {
      throw new Error("ArgumentRequired");
    }
    try {
      const role = await this.getRoleByName(name);
      if (role) {
        throw new Error("DataAlreadyExist");
      }
      return await this.roleRepository.createRole({ name });
    } catch (err) {
      console.error(err);
      throw new Error(err.message);
    }
  }

  async getRoleByName(name) {
    if (!name || Object.keys(name).length === 0) {
      throw new Error("ArgumentRequired");
    }
    try {
      return await this.roleRepository.getRoleByName(name);
    } catch (err) {
      throw new Error("DataNotFound", err);
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

export default RoleService;
